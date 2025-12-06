/**
 * History Service
 * ================
 * Service untuk mengelola playback history.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

export const historyService = new Elysia({ prefix: "/history" })
    // =====================
    // GET USER HISTORY
    // =====================
    .get("/:userId", async ({ params, query }) => {
        logRequest("GET", `/history/${params.userId}`, query);
        const userId = parseId(params.userId);
        if (!userId) return errorResponse("Invalid user ID");

        try {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });

            const where: any = { userId };
            if (query.type === "music") where.musicId = { not: null };
            if (query.type === "video") where.videoId = { not: null };

            logDbOperation("READ", "History", `Fetching for user: ${userId}`);
            const totalItems = await prisma.history.count({ where });
            const history = await prisma.history.findMany({
                where,
                skip, take,
                orderBy: { playedAt: "desc" },
                include: {
                    music: { include: { artist: { select: { id: true, name: true } }, album: { select: { id: true, title: true, coverImage: true } } } },
                    video: { select: { id: true, title: true, thumbnail: true, type: true, duration: true } },
                },
            });

            console.log(`✅ [History] Found ${history.length} history items for user ${userId}`);
            return successResponse("History retrieved", history, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Failed to fetch history", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String() }),
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            type: t.Optional(t.String()), // "music" or "video"
        }),
        detail: { tags: ["History"], summary: "Get user's playback history" },
    })

    // =====================
    // ADD TO HISTORY
    // =====================
    .post("/", async ({ body }) => {
        logRequest("POST", "/history", body);
        try {
            const { userId, musicId, videoId } = body;

            if (!musicId && !videoId) return errorResponse("Either musicId or videoId is required");
            if (musicId && videoId) return errorResponse("Only one of musicId or videoId should be provided");

            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            if (musicId) {
                const music = await prisma.music.findUnique({ where: { id: musicId } });
                if (!music) return errorResponse("Music not found");
            }

            if (videoId) {
                const video = await prisma.video.findUnique({ where: { id: videoId } });
                if (!video) return errorResponse("Video not found");
            }

            logDbOperation("CREATE", "History", `User ${userId} -> ${musicId ? `Music ${musicId}` : `Video ${videoId}`}`);
            const history = await prisma.history.create({
                data: { userId, musicId, videoId },
                include: { music: true, video: true },
            });

            console.log(`✅ [History] Added to history for user ${userId}`);
            return successResponse("Added to history", history);
        } catch (error) {
            return errorResponse("Failed to add history", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            userId: t.Number(),
            musicId: t.Optional(t.Number()),
            videoId: t.Optional(t.Number()),
        }),
        detail: { tags: ["History"], summary: "Add to history" },
    })

    // =====================
    // REMOVE FROM HISTORY
    // =====================
    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/history/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");

        try {
            const existing = await prisma.history.findUnique({ where: { id } });
            if (!existing) return errorResponse("History entry not found");

            await prisma.history.delete({ where: { id } });
            console.log(`✅ [History] Removed history entry ${id}`);
            return successResponse("Removed from history", { id });
        } catch (error) {
            return errorResponse("Failed to remove history", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        detail: { tags: ["History"], summary: "Remove from history" },
    })

    // =====================
    // CLEAR USER HISTORY
    // =====================
    .delete("/user/:userId", async ({ params, query }) => {
        logRequest("DELETE", `/history/user/${params.userId}`, query);
        const userId = parseId(params.userId);
        if (!userId) return errorResponse("Invalid user ID");

        try {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) return errorResponse("User not found");

            const where: any = { userId };
            if (query.type === "music") where.musicId = { not: null };
            if (query.type === "video") where.videoId = { not: null };

            logDbOperation("DELETE", "History", `Clearing history for user: ${userId}`);
            const result = await prisma.history.deleteMany({ where });

            console.log(`✅ [History] Cleared ${result.count} history entries for user ${userId}`);
            return successResponse("History cleared", { userId, deletedCount: result.count });
        } catch (error) {
            return errorResponse("Failed to clear history", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String() }),
        query: t.Object({ type: t.Optional(t.String()) }),
        detail: { tags: ["History"], summary: "Clear user's history" },
    })

    // =====================
    // GET RECENT PLAYED
    // =====================
    .get("/recent/:userId", async ({ params, query }) => {
        logRequest("GET", `/history/recent/${params.userId}`, query);
        const userId = parseId(params.userId);
        if (!userId) return errorResponse("Invalid user ID");

        try {
            const limit = Math.min(50, Math.max(1, Number(query.limit) || 10));

            const recentMusic = await prisma.history.findMany({
                where: { userId, musicId: { not: null } },
                orderBy: { playedAt: "desc" },
                take: limit,
                include: {
                    music: { include: { artist: { select: { id: true, name: true } }, album: { select: { id: true, title: true, coverImage: true } } } },
                },
                distinct: ["musicId"],
            });

            const recentVideos = await prisma.history.findMany({
                where: { userId, videoId: { not: null } },
                orderBy: { playedAt: "desc" },
                take: limit,
                include: { video: true },
                distinct: ["videoId"],
            });

            console.log(`✅ [History] Recent: ${recentMusic.length} music, ${recentVideos.length} videos for user ${userId}`);
            return successResponse("Recent played", {
                music: recentMusic.map((h: typeof recentMusic[number]) => ({ ...h.music, playedAt: h.playedAt })),
                videos: recentVideos.map((h: typeof recentVideos[number]) => ({ ...h.video, playedAt: h.playedAt })),
            });
        } catch (error) {
            return errorResponse("Failed to fetch recent", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ userId: t.String() }),
        query: t.Object({ limit: t.Optional(t.String()) }),
        detail: { tags: ["History"], summary: "Get recently played" },
    });
