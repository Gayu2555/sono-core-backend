/**
 * Image Service
 * ==============
 * Service untuk upload, get, dan delete gambar.
 */

import { Elysia, t } from "elysia";
import { existsSync, mkdirSync, unlinkSync, writeFileSync, readFileSync } from "fs";
import { join, extname } from "path";
import { logRequest, logDbOperation, successResponse, errorResponse, IMAGES_PATH } from "../utils/helpers";

// Ensure images directory exists
if (!existsSync(IMAGES_PATH)) {
    mkdirSync(IMAGES_PATH, { recursive: true });
    console.log(`📁 [Image] Created images directory: ${IMAGES_PATH}`);
}

// Generate unique filename
function generateFilename(originalName: string): string {
    const ext = extname(originalName).toLowerCase() || ".jpg";
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${random}${ext}`;
}

// Allowed file extensions
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

export const imageService = new Elysia({ prefix: "/images" })
    .post("/upload", async ({ body, set }) => {
        logRequest("POST", "/images/upload");

        try {
            const file = body.file;

            if (!file) {
                set.status = 400;
                return errorResponse("No file provided");
            }

            console.log(`📤 [Image] Uploading file: ${file.name}, Size: ${file.size} bytes`);

            // Validate file extension
            const ext = extname(file.name).toLowerCase();
            if (!ALLOWED_EXTENSIONS.includes(ext)) {
                set.status = 400;
                return errorResponse("Invalid file type", `Allowed: ${ALLOWED_EXTENSIONS.join(", ")}`);
            }

            // Validate file size (max 10MB)
            const maxSize = 10 * 1024 * 1024;
            if (file.size > maxSize) {
                set.status = 400;
                return errorResponse("File too large", "Maximum size is 10MB");
            }

            // Generate filename and save
            const filename = generateFilename(file.name);
            const filepath = join(IMAGES_PATH, filename);

            logDbOperation("CREATE", "Image", `Saving: ${filename}`);

            const buffer = await file.arrayBuffer();
            writeFileSync(filepath, Buffer.from(buffer));

            console.log(`✅ [Image] Uploaded: ${filename}`);

            return successResponse("Image uploaded successfully", {
                filename,
                originalName: file.name,
                size: file.size,
                path: `/static/images/${filename}`,
                url: `/images/${filename}`,
            });
        } catch (error) {
            console.error("❌ [Image] Upload error:", error);
            set.status = 500;
            return errorResponse("Upload failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            file: t.File(),
        }),
        detail: {
            tags: ["Images"],
            summary: "Upload image",
            description: "Upload an image file (JPG, PNG, GIF, WebP, SVG). Max 10MB.",
        },
    })

    .get("/:filename", async ({ params, set }) => {
        logRequest("GET", `/images/${params.filename}`);

        try {
            const filename = params.filename;
            const filepath = join(IMAGES_PATH, filename);

            if (!existsSync(filepath)) {
                console.warn(`⚠️ [Image] File not found: ${filename}`);
                set.status = 404;
                return errorResponse("Image not found");
            }

            console.log(`📥 [Image] Serving: ${filename}`);

            const file = readFileSync(filepath);
            const ext = extname(filename).toLowerCase();

            // Set content type
            const mimeTypes: Record<string, string> = {
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".png": "image/png",
                ".gif": "image/gif",
                ".webp": "image/webp",
                ".svg": "image/svg+xml",
            };

            set.headers = {
                "Content-Type": mimeTypes[ext] || "application/octet-stream",
                "Cache-Control": "public, max-age=31536000",
            };

            return file;
        } catch (error) {
            console.error(`❌ [Image] Get error:`, error);
            set.status = 500;
            return errorResponse("Failed to get image", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ filename: t.String() }),
        detail: {
            tags: ["Images"],
            summary: "Get image",
            description: "Get an uploaded image by filename",
        },
    })

    .delete("/:filename", async ({ params, set }) => {
        logRequest("DELETE", `/images/${params.filename}`);

        try {
            const filename = params.filename;
            const filepath = join(IMAGES_PATH, filename);

            if (!existsSync(filepath)) {
                console.warn(`⚠️ [Image] File not found: ${filename}`);
                set.status = 404;
                return errorResponse("Image not found");
            }

            logDbOperation("DELETE", "Image", `Deleting: ${filename}`);

            unlinkSync(filepath);

            console.log(`✅ [Image] Deleted: ${filename}`);

            return successResponse("Image deleted successfully", { filename });
        } catch (error) {
            console.error(`❌ [Image] Delete error:`, error);
            set.status = 500;
            return errorResponse("Failed to delete image", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ filename: t.String() }),
        detail: {
            tags: ["Images"],
            summary: "Delete image",
            description: "Delete an uploaded image by filename",
        },
    });
