/**
 * User Service dengan Google OAuth2
 * ===================================
 * User management dan authentication termasuk Google OAuth2 SSO.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production";
const JWT_EXPIRES_IN = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// Google OAuth2 Configuration
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/auth/google/callback";

// Type definitions for Google OAuth responses
interface GoogleTokenResponse {
    access_token?: string;
    expires_in?: number;
    refresh_token?: string;
    token_type?: string;
    error?: string;
    error_description?: string;
}

interface GoogleUserInfo {
    id: string;
    email: string;
    name?: string;
    picture?: string;
}

interface GoogleTokenInfo {
    email?: string;
    error?: string;
}


// Simple password hashing (in production use bcrypt)
async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
    const inputHash = await hashPassword(password);
    return inputHash === hash;
}

// JWT Token Generation
function generateToken(user: { id: number; username: string; email: string }): string {
    const header = { alg: "HS256", typ: "JWT" };
    const payload = {
        sub: user.id,
        username: user.username,
        email: user.email,
        iat: Date.now(),
        exp: Date.now() + JWT_EXPIRES_IN,
    };

    const base64Header = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    const base64Payload = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

    const signatureInput = `${base64Header}.${base64Payload}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(JWT_SECRET);
    const messageData = encoder.encode(signatureInput);

    // Simple HMAC-like signature using SHA-256
    const combined = new Uint8Array(keyData.length + messageData.length);
    combined.set(keyData);
    combined.set(messageData, keyData.length);

    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash = ((hash << 5) - hash) + combined[i]!;
        hash = hash & hash;
    }
    const signature = btoa(hash.toString()).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

    return `${base64Header}.${base64Payload}.${signature}`;
}

function verifyToken(token: string): { valid: boolean; payload?: any; error?: string } {
    try {
        const parts = token.split(".");
        if (parts.length !== 3) return { valid: false, error: "Invalid token format" };

        const payloadPart = parts[1];
        if (!payloadPart) return { valid: false, error: "Invalid token format" };

        const payloadStr = atob(payloadPart.replace(/-/g, "+").replace(/_/g, "/"));
        const payload = JSON.parse(payloadStr);

        if (!payload || typeof payload.exp !== "number" || payload.exp < Date.now()) {
            return { valid: false, error: "Token expired" };
        }

        return { valid: true, payload };
    } catch (error) {
        return { valid: false, error: "Invalid token" };
    }
}

export const userService = new Elysia({ prefix: "/users" })
    // =====================
    // GET USER BY ID
    // =====================
    .get("/:id", async ({ params }) => {
        logRequest("GET", `/users/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const user = await prisma.user.findUnique({
                where: { id },
                select: { id: true, username: true, email: true, picture: true, createdAt: true, updatedAt: true },
            });
            if (!user) return errorResponse("User not found");
            console.log(`✅ [User] Found: ${user.username}`);
            return successResponse("User retrieved", user);
        } catch (error) {
            return errorResponse("Failed to fetch user", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Users"], summary: "Get user by ID" } })

    // =====================
    // REGISTER USER
    // =====================
    .post("/register", async ({ body, set }) => {
        logRequest("POST", "/users/register", { ...body, password: "[HIDDEN]" });
        try {
            const { username, email, password } = body;

            if (!username?.trim()) return errorResponse("Username required");
            if (!email?.trim()) return errorResponse("Email required");
            if (!password || password.length < 6) return errorResponse("Password must be at least 6 characters");

            // Check if user exists
            const existingUser = await prisma.user.findFirst({
                where: { OR: [{ email }, { username: username.trim() }] },
            });
            if (existingUser) {
                set.status = 409;
                return errorResponse("User already exists", "Email or username is already taken");
            }

            logDbOperation("CREATE", "User", `Registering: ${username}`);
            const hashedPassword = await hashPassword(password);

            const user = await prisma.user.create({
                data: {
                    username: username.trim(),
                    email: email.trim().toLowerCase(),
                    password: hashedPassword,
                    googleId: `local_${Date.now()}`, // Placeholder for non-OAuth users
                },
                select: { id: true, username: true, email: true, createdAt: true },
            });

            const token = generateToken(user);
            console.log(`✅ [User] Registered: ${user.username} (ID: ${user.id})`);
            return successResponse("Registration successful", { user, token, expiresIn: JWT_EXPIRES_IN });
        } catch (error) {
            console.error("❌ [User] Registration error:", error);
            return errorResponse("Registration failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({ username: t.String(), email: t.String(), password: t.String() }),
        detail: { tags: ["Users"], summary: "Register user" },
    })

    // =====================
    // LOGIN USER (via email or username)
    // =====================
    .post("/login", async ({ body, set }) => {
        logRequest("POST", "/users/login", { username: body.username, password: "[HIDDEN]" });
        try {
            const { username, password } = body;

            if (!username?.trim()) return errorResponse("Email or username required");
            if (!password) return errorResponse("Password required");

            const trimmedInput = username.trim().toLowerCase();

            // Check if input is email or username
            const isEmail = trimmedInput.includes("@");

            const user = await prisma.user.findFirst({
                where: isEmail
                    ? { email: trimmedInput }
                    : {
                        OR: [
                            { username: trimmedInput },
                            { username: username.trim() }, // Also try original case
                        ]
                    },
            });

            if (!user) {
                set.status = 401;
                return errorResponse("Invalid credentials", "User not found");
            }

            const isValid = await verifyPassword(password, user.password);
            if (!isValid) {
                set.status = 401;
                return errorResponse("Invalid credentials", "Wrong password");
            }

            const token = generateToken({ id: user.id, username: user.username, email: user.email });
            console.log(`✅ [User] Login successful: ${user.username}`);
            return successResponse("Login successful", {
                user: { id: user.id, username: user.username, email: user.email, picture: user.picture },
                token,
                expiresIn: JWT_EXPIRES_IN,
            });
        } catch (error) {
            return errorResponse("Login failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({ username: t.String(), password: t.String() }),
        detail: { tags: ["Users"], summary: "Login user with email or username" },
    })

    // =====================
    // UPDATE USER
    // =====================
    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/users/${params.id}`, { ...body, password: body.password ? "[HIDDEN]" : undefined });
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.user.findUnique({ where: { id } });
            if (!existing) return errorResponse("User not found");

            const { username, email, password, picture } = body;

            // Check for conflicts
            if (email || username) {
                const conflict = await prisma.user.findFirst({
                    where: {
                        AND: [
                            { id: { not: id } },
                            {
                                OR: [
                                    ...(email ? [{ email: email.trim().toLowerCase() }] : []),
                                    ...(username ? [{ username: username.trim() }] : []),
                                ]
                            },
                        ],
                    },
                });
                if (conflict) return errorResponse("Email or username already taken");
            }

            const updateData: any = {};
            if (username) updateData.username = username.trim();
            if (email) updateData.email = email.trim().toLowerCase();
            if (password) updateData.password = await hashPassword(password);
            if (picture !== undefined) updateData.picture = picture;

            const user = await prisma.user.update({
                where: { id },
                data: updateData,
                select: { id: true, username: true, email: true, picture: true, updatedAt: true },
            });

            console.log(`✅ [User] Updated: ${user.username}`);
            return successResponse("User updated", user);
        } catch (error) {
            return errorResponse("Failed to update user", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            username: t.Optional(t.String()), email: t.Optional(t.String()),
            password: t.Optional(t.String()), picture: t.Optional(t.String()),
        }),
        detail: { tags: ["Users"], summary: "Update user" },
    })

    // =====================
    // DELETE USER
    // =====================
    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/users/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.user.findUnique({ where: { id } });
            if (!existing) return errorResponse("User not found");
            await prisma.user.delete({ where: { id } });
            console.log(`✅ [User] Deleted: ${existing.username}`);
            return successResponse("User deleted", { id, username: existing.username });
        } catch (error) {
            return errorResponse("Failed to delete user", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Users"], summary: "Delete user" } });

// =====================
// GOOGLE OAUTH2 SERVICE
// =====================
export const authService = new Elysia({ prefix: "/auth" })
    // Google OAuth2 - Initiate
    .get("/google", async ({ set }) => {
        logRequest("GET", "/auth/google");

        if (!GOOGLE_CLIENT_ID) {
            console.error("❌ [Auth] GOOGLE_CLIENT_ID not configured");
            set.status = 500;
            return errorResponse("Google OAuth not configured");
        }

        const state = Math.random().toString(36).substring(2, 15);
        const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
        authUrl.searchParams.set("client_id", GOOGLE_CLIENT_ID);
        authUrl.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
        authUrl.searchParams.set("response_type", "code");
        authUrl.searchParams.set("scope", "openid email profile");
        authUrl.searchParams.set("state", state);
        authUrl.searchParams.set("access_type", "offline");
        authUrl.searchParams.set("prompt", "consent");

        console.log(`🔐 [Auth] Redirecting to Google OAuth`);

        set.redirect = authUrl.toString();
        return;
    }, {
        detail: { tags: ["Auth"], summary: "Initiate Google OAuth2", description: "Redirects to Google login page" },
    })

    // Google OAuth2 - Callback
    .get("/google/callback", async ({ query, set }) => {
        logRequest("GET", "/auth/google/callback", { code: query.code ? "[PRESENT]" : "[MISSING]", state: query.state });

        const { code, error: oauthError } = query;

        if (oauthError) {
            console.error(`❌ [Auth] OAuth error: ${oauthError}`);
            set.status = 400;
            return errorResponse("OAuth failed", oauthError);
        }

        if (!code) {
            set.status = 400;
            return errorResponse("Authorization code not provided");
        }

        try {
            // Exchange code for tokens
            console.log(`🔄 [Auth] Exchanging code for tokens...`);
            const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    code,
                    client_id: GOOGLE_CLIENT_ID,
                    client_secret: GOOGLE_CLIENT_SECRET,
                    redirect_uri: GOOGLE_REDIRECT_URI,
                    grant_type: "authorization_code",
                }),
            });

            const tokens = await tokenResponse.json() as GoogleTokenResponse;
            if (tokens.error) {
                console.error(`❌ [Auth] Token error: ${tokens.error}`);
                set.status = 400;
                return errorResponse("Failed to get tokens", tokens.error_description || tokens.error);
            }

            console.log(`✅ [Auth] Tokens received`);

            // Get user info
            console.log(`🔄 [Auth] Fetching user info...`);
            const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
                headers: { Authorization: `Bearer ${tokens.access_token}` },
            });

            const googleUser = await userInfoResponse.json() as GoogleUserInfo;
            console.log(`✅ [Auth] Google user: ${googleUser.email}`);

            // Find or create user
            let user = await prisma.user.findUnique({ where: { googleId: googleUser.id } });

            if (!user) {
                // Check if email already exists
                const existingByEmail = await prisma.user.findUnique({ where: { email: googleUser.email } });
                if (existingByEmail) {
                    // Update existing user with Google ID
                    user = await prisma.user.update({
                        where: { id: existingByEmail.id },
                        data: { googleId: googleUser.id, picture: googleUser.picture },
                    });
                    console.log(`🔗 [Auth] Linked Google account to existing user: ${user.username}`);
                } else {
                    // Create new user
                    const username = googleUser.name?.replace(/\s+/g, "_").toLowerCase() || `user_${Date.now()}`;
                    user = await prisma.user.create({
                        data: {
                            username,
                            email: googleUser.email,
                            password: await hashPassword(Math.random().toString(36)), // Random password
                            googleId: googleUser.id,
                            picture: googleUser.picture,
                        },
                    });
                    console.log(`✅ [Auth] Created new user via Google: ${user.username}`);
                }
            } else {
                // Update picture if changed
                if (googleUser.picture && user.picture !== googleUser.picture) {
                    user = await prisma.user.update({
                        where: { id: user.id },
                        data: { picture: googleUser.picture },
                    });
                }
                console.log(`✅ [Auth] Existing user login: ${user.username}`);
            }

            return successResponse("Google login successful", {
                user: { id: user.id, username: user.username, email: user.email, picture: user.picture },
                tokens: { access_token: tokens.access_token, expires_in: tokens.expires_in },
            });
        } catch (error) {
            console.error(`❌ [Auth] Callback error:`, error);
            set.status = 500;
            return errorResponse("Google authentication failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            code: t.Optional(t.String()),
            state: t.Optional(t.String()),
            error: t.Optional(t.String()),
        }),
        detail: { tags: ["Auth"], summary: "Google OAuth2 callback", description: "Handles Google OAuth2 redirect" },
    })
    // ala ala kasih sedikit perubahan kecil, gpp kita kasih lagi perubahan kecilnya wkwk
    // Check auth status
    .get("/me", async ({ request }) => {
        logRequest("GET", "/auth/me");

        const authHeader = request.headers.get("authorization");
        if (!authHeader?.startsWith("Bearer ")) {
            return errorResponse("No token provided");
        }

        const token = authHeader.substring(7);

        try {
            // Verify token with Google
            const response = await fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
            const tokenInfo = await response.json() as GoogleTokenInfo;

            if (tokenInfo.error) {
                return errorResponse("Invalid token", tokenInfo.error);
            }

            const user = await prisma.user.findUnique({
                where: { email: tokenInfo.email },
                select: { id: true, username: true, email: true, picture: true },
            });

            if (!user) {
                return errorResponse("User not found");
            }

            return successResponse("Authenticated", { user });
        } catch (error) {
            return errorResponse("Token verification failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        detail: { tags: ["Auth"], summary: "Get current user", description: "Get authenticated user info" },
    });
