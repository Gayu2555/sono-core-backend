/**
 * Favorite Service
 * =================
 * Service untuk mengelola favorite music dan video.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

export const favoriteService = new Elysia({ prefix: "/favorites" })
    // =====================
    // GET FAVORITE MUSIC
    // =====================
    .get("/music/:userId", async ({ params, query }) => {
        logRequest("GET", `/favorites/music/${params.userId}`, query);
        const userId = parseId(params.userId);
        if (!userId) return errorResponse("Invalid user ID");

        try {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });

            logDbOperation("READ", "FavoriteMusic", `Fetching for user: ${userId}`);
            const totalItems = await prisma.favoriteMusic.count({ where: { userId } });
            const favorites = await prisma.favoriteMusic.findMany({
                where: { userId },
                skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    music: {
                        include: {
                            artist: { select: { id: true, name: true } },
                            album: { select: { id: true, title: true, coverImage: true } },
                        },
                    },
                },
            });

            console.log(`✅ [Favorite] Found ${favorites.length} favorite music for user ${userId}`);
            return successResponse("Favorite music retrieved", favorites, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Failed to fetch favorites", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String() }),
        query: t.Object({ page: t.Optional(t.String()), limit: t.Optional(t.String()) }),
        detail: { tags: ["Favorites"], summary: "Get user's favorite music" },
    })

    // =====================
    // ADD FAVORITE MUSIC
    // =====================
    .post("/music", async ({ body, set }) => {
        logRequest("POST", "/favorites/music", body);
        try {
            const { userId, musicId } = body;

            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            const music = await prisma.music.findUnique({ where: { id: musicId } });
            if (!music) return errorResponse("Music not found");

            // Check if already favorited
            const existing = await prisma.favoriteMusic.findFirst({
                where: { userId, musicId },
            });
            if (existing) {
                set.status = 409;
                return errorResponse("Already in favorites");
            }

            logDbOperation("CREATE", "FavoriteMusic", `User ${userId} -> Music ${musicId}`);
            const favorite = await prisma.favoriteMusic.create({
                data: { userId, musicId },
                include: { music: true },
            });

            console.log(`✅ [Favorite] Added music ${musicId} to user ${userId} favorites`);
            return successResponse("Added to favorites", favorite);
        } catch (error) {
            return errorResponse("Failed to add favorite", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({ userId: t.Number(), musicId: t.Number() }),
        detail: { tags: ["Favorites"], summary: "Add music to favorites" },
    })

    // =====================
    // REMOVE FAVORITE MUSIC
    // =====================
    .delete("/music/:id", async ({ params }) => {
        logRequest("DELETE", `/favorites/music/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");

        try {
            const existing = await prisma.favoriteMusic.findUnique({ where: { id } });
            if (!existing) return errorResponse("Favorite not found");

            await prisma.favoriteMusic.delete({ where: { id } });
            console.log(`✅ [Favorite] Removed favorite music ${id}`);
            return successResponse("Removed from favorites", { id });
        } catch (error) {
            return errorResponse("Failed to remove favorite", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        detail: { tags: ["Favorites"], summary: "Remove music from favorites" },
    })

    // =====================
    // CHECK IF MUSIC IS FAVORITED
    // =====================
    .get("/music/check/:userId/:musicId", async ({ params }) => {
        logRequest("GET", `/favorites/music/check/${params.userId}/${params.musicId}`);
        const userId = parseId(params.userId);
        const musicId = parseId(params.musicId);
        if (!userId || !musicId) return errorResponse("Invalid IDs");

        try {
            const favorite = await prisma.favoriteMusic.findFirst({
                where: { userId, musicId },
            });
            return successResponse("Check result", { isFavorited: !!favorite, favoriteId: favorite?.id || null });
        } catch (error) {
            return errorResponse("Failed to check", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String(), musicId: t.String() }),
        detail: { tags: ["Favorites"], summary: "Check if music is favorited" },
    })

    // =====================
    // GET FAVORITE VIDEOS
    // =====================
    .get("/video/:userId", async ({ params, query }) => {
        logRequest("GET", `/favorites/video/${params.userId}`, query);
        const userId = parseId(params.userId);
        if (!userId) return errorResponse("Invalid user ID");

        try {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });

            logDbOperation("READ", "FavoriteVideo", `Fetching for user: ${userId}`);
            const totalItems = await prisma.favoriteVideo.count({ where: { userId } });
            const favorites = await prisma.favoriteVideo.findMany({
                where: { userId },
                skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    video: { select: { id: true, title: true, thumbnail: true, type: true, duration: true } },
                },
            });

            console.log(`✅ [Favorite] Found ${favorites.length} favorite videos for user ${userId}`);
            return successResponse("Favorite videos retrieved", favorites, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Failed to fetch favorites", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String() }),
        query: t.Object({ page: t.Optional(t.String()), limit: t.Optional(t.String()) }),
        detail: { tags: ["Favorites"], summary: "Get user's favorite videos" },
    })

    // =====================
    // ADD FAVORITE VIDEO
    // =====================
    .post("/video", async ({ body, set }) => {
        logRequest("POST", "/favorites/video", body);
        try {
            const { userId, videoId } = body;

            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            const video = await prisma.video.findUnique({ where: { id: videoId } });
            if (!video) return errorResponse("Video not found");

            const existing = await prisma.favoriteVideo.findFirst({
                where: { userId, videoId },
            });
            if (existing) {
                set.status = 409;
                return errorResponse("Already in favorites");
            }

            logDbOperation("CREATE", "FavoriteVideo", `User ${userId} -> Video ${videoId}`);
            const favorite = await prisma.favoriteVideo.create({
                data: { userId, videoId },
                include: { video: true },
            });

            console.log(`✅ [Favorite] Added video ${videoId} to user ${userId} favorites`);
            return successResponse("Added to favorites", favorite);
        } catch (error) {
            return errorResponse("Failed to add favorite", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({ userId: t.Number(), videoId: t.Number() }),
        detail: { tags: ["Favorites"], summary: "Add video to favorites" },
    })

    // =====================
    // REMOVE FAVORITE VIDEO
    // =====================
    .delete("/video/:id", async ({ params }) => {
        logRequest("DELETE", `/favorites/video/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");

        try {
            const existing = await prisma.favoriteVideo.findUnique({ where: { id } });
            if (!existing) return errorResponse("Favorite not found");

            await prisma.favoriteVideo.delete({ where: { id } });
            console.log(`✅ [Favorite] Removed favorite video ${id}`);
            return successResponse("Removed from favorites", { id });
        } catch (error) {
            return errorResponse("Failed to remove favorite", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        detail: { tags: ["Favorites"], summary: "Remove video from favorites" },
    })

    // =====================
    // CHECK IF VIDEO IS FAVORITED
    // =====================
    .get("/video/check/:userId/:videoId", async ({ params }) => {
        logRequest("GET", `/favorites/video/check/${params.userId}/${params.videoId}`);
        const userId = parseId(params.userId);
        const videoId = parseId(params.videoId);
        if (!userId || !videoId) return errorResponse("Invalid IDs");

        try {
            const favorite = await prisma.favoriteVideo.findFirst({
                where: { userId, videoId },
            });
            return successResponse("Check result", { isFavorited: !!favorite, favoriteId: favorite?.id || null });
        } catch (error) {
            return errorResponse("Failed to check", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String(), videoId: t.String() }),
        detail: { tags: ["Favorites"], summary: "Check if video is favorited" },
    });
