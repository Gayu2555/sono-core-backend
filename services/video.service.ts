/**
 * Video Service
 * ==============
 * CRUD operations untuk Video entity.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId, formatVideoThumbnailUrl,
} from "../utils/helpers";

export const videoService = new Elysia({ prefix: "/videos" })
    .get("/", async ({ query }) => {
        logRequest("GET", "/videos", query);
        try {
            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });
            const where: any = {};
            if (query.type) where.type = query.type;
            if (query.year) where.release_year = Number(query.year);
            if (query.q) {
                where.OR = [
                    { title: { contains: query.q } },
                    { description: { contains: query.q } },
                ];
            }

            logDbOperation("READ", "Video", `Fetching page ${page}`);
            const totalItems = await prisma.video.count({ where });
            const videos = await prisma.video.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    movie: { select: { id: true, director: true, genre: true } },
                    _count: { select: { episodes: true } },
                },
            });
            console.log(`✅ [Video] Retrieved ${videos.length} videos`);
            // Transform thumbnail URLs
            const transformedVideos = videos.map(v => ({
                ...v,
                thumbnail: formatVideoThumbnailUrl(v.thumbnail),
            }));
            return successResponse("Videos retrieved", transformedVideos, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            console.error("❌ [Video] Error:", error);
            return errorResponse("Failed to fetch videos", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            type: t.Optional(t.String()), year: t.Optional(t.String()), q: t.Optional(t.String()),
        }),
        detail: { tags: ["Videos"], summary: "Get all videos" },
    })

    .get("/search", async ({ query }) => {
        logRequest("GET", "/videos/search", query);
        try {
            const searchQuery = query.q || query.search;
            if (!searchQuery) return errorResponse("Search query required");

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });

            const where = {
                OR: [
                    { title: { contains: searchQuery } },
                    { description: { contains: searchQuery } },
                ],
            };

            const totalItems = await prisma.video.count({ where });
            const videos = await prisma.video.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: { movie: true },
            });
            console.log(`🔍 [Video] Search "${searchQuery}" found ${videos.length} results`);
            // Transform thumbnail URLs
            const transformedVideos = videos.map(v => ({
                ...v,
                thumbnail: formatVideoThumbnailUrl(v.thumbnail),
            }));
            return successResponse(`Search results for "${searchQuery}"`, transformedVideos, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Search failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            q: t.Optional(t.String()), search: t.Optional(t.String()),
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
        }),
        detail: { tags: ["Videos"], summary: "Search videos" },
    })

    .get("/:id", async ({ params }) => {
        logRequest("GET", `/videos/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const video = await prisma.video.findUnique({
                where: { id },
                include: { movie: true, episodes: { orderBy: [{ season_number: "asc" }, { episode_number: "asc" }] } },
            });
            if (!video) return errorResponse("Video not found");
            console.log(`✅ [Video] Found: ${video.title}`);
            // Transform thumbnail URL
            const transformedVideo = {
                ...video,
                thumbnail: formatVideoThumbnailUrl(video.thumbnail),
            };
            return successResponse("Video retrieved", transformedVideo);
        } catch (error) {
            return errorResponse("Failed to fetch video", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Videos"], summary: "Get video by ID" } })

    .post("/", async ({ body }) => {
        logRequest("POST", "/videos", body);
        try {
            const { title, description, thumbnail, api_url, type, release_year, duration } = body;
            if (!title?.trim()) return errorResponse("Title required");
            if (!api_url?.trim()) return errorResponse("API URL required");
            if (!type) return errorResponse("Type required");

            logDbOperation("CREATE", "Video", `Creating: ${title}`);
            const video = await prisma.video.create({
                data: { title: title.trim(), description: description?.trim(), thumbnail, api_url, type, release_year, duration },
            });
            console.log(`✅ [Video] Created: ${video.title} (ID: ${video.id})`);
            return successResponse("Video created", video);
        } catch (error) {
            return errorResponse("Failed to create video", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            title: t.String(), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            api_url: t.String(), type: t.Union([t.Literal("movie"), t.Literal("episode")]),
            release_year: t.Optional(t.Number()), duration: t.Optional(t.String()),
        }),
        detail: { tags: ["Videos"], summary: "Create video" },
    })

    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/videos/${params.id}`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.video.findUnique({ where: { id } });
            if (!existing) return errorResponse("Video not found");
            const { title, description, thumbnail, api_url, type, release_year, duration } = body;
            const video = await prisma.video.update({
                where: { id },
                data: {
                    ...(title && { title: title.trim() }), ...(description !== undefined && { description: description?.trim() }),
                    ...(thumbnail !== undefined && { thumbnail }), ...(api_url && { api_url }),
                    ...(type && { type }), ...(release_year !== undefined && { release_year }),
                    ...(duration !== undefined && { duration }),
                },
            });
            console.log(`✅ [Video] Updated: ${video.title}`);
            return successResponse("Video updated", video);
        } catch (error) {
            return errorResponse("Failed to update video", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            title: t.Optional(t.String()), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            api_url: t.Optional(t.String()), type: t.Optional(t.Union([t.Literal("movie"), t.Literal("episode")])),
            release_year: t.Optional(t.Number()), duration: t.Optional(t.String()),
        }),
        detail: { tags: ["Videos"], summary: "Update video" },
    })

    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/videos/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.video.findUnique({ where: { id } });
            if (!existing) return errorResponse("Video not found");
            await prisma.video.delete({ where: { id } });
            console.log(`✅ [Video] Deleted: ${existing.title}`);
            return successResponse("Video deleted", { id, title: existing.title });
        } catch (error) {
            return errorResponse("Failed to delete video", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Videos"], summary: "Delete video" } });
