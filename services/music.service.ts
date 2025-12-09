/**
 * Music Service
 * ==============
 * CRUD operations untuk Music entity dengan play tracking.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest,
    logDbOperation,
    successResponse,
    errorResponse,
    parsePagination,
    createPaginationMeta,
    parseId,
    formatAlbumCoverUrl,
    formatArtistImageUrl,
} from "../utils/helpers";

export const musicService = new Elysia({ prefix: "/music" })
    .get("/", async ({ query }) => {
        logRequest("GET", "/music", query);
        try {
            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page),
                limit: Number(query.limit),
            });
            const searchQuery = query.q || query.search;
            const where: any = {};
            if (searchQuery) {
                where.OR = [
                    { title: { contains: searchQuery } },
                    { artist: { name: { contains: searchQuery } } },
                ];
            }
            if (query.genre) where.genre = { contains: query.genre };

            const totalItems = await prisma.music.count({ where });
            const music = await prisma.music.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    artist: { select: { id: true, name: true, image: true } },
                    album: { select: { id: true, title: true, coverImage: true } },
                    _count: { select: { musicPlays: true } },
                },
            });
            // Transform image URLs
            const transformedMusic = music.map(m => ({
                ...m,
                artist: m.artist ? { ...m.artist, image: formatArtistImageUrl(m.artist.image) } : null,
                album: m.album ? { ...m.album, coverImage: formatAlbumCoverUrl(m.album.coverImage) } : null,
            }));
            return successResponse("Music retrieved", transformedMusic, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Failed to fetch music", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            q: t.Optional(t.String()), search: t.Optional(t.String()), genre: t.Optional(t.String()),
        }),
        detail: { tags: ["Music"], summary: "Get all music" },
    })

    // =====================
    // SEARCH MUSIC
    // =====================
    .get("/search", async ({ query }) => {
        logRequest("GET", "/music/search", query);
        try {
            const searchQuery = query.q || query.search;
            if (!searchQuery) {
                return errorResponse("Search query required", "Please provide ?q= or ?search= parameter");
            }

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page),
                limit: Number(query.limit),
            });

            const where: any = {
                OR: [
                    { title: { contains: searchQuery } },
                    { genre: { contains: searchQuery } },
                    { artist: { name: { contains: searchQuery } } },
                    { album: { title: { contains: searchQuery } } },
                ],
            };

            // Additional filters
            if (query.genre) {
                where.AND = [{ genre: { contains: query.genre } }];
            }
            if (query.artistId) {
                where.artistId = parseInt(query.artistId, 10);
            }
            if (query.albumId) {
                where.albumId = parseInt(query.albumId, 10);
            }

            logDbOperation("READ", "Music", `Searching: "${searchQuery}"`);
            const totalItems = await prisma.music.count({ where });
            const music = await prisma.music.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    artist: { select: { id: true, name: true, image: true } },
                    album: { select: { id: true, title: true, coverImage: true } },
                    _count: { select: { musicPlays: true } },
                },
            });

            // Transform image URLs
            const transformedMusic = music.map(m => ({
                ...m,
                artist: m.artist ? { ...m.artist, image: formatArtistImageUrl(m.artist.image) } : null,
                album: m.album ? { ...m.album, coverImage: formatAlbumCoverUrl(m.album.coverImage) } : null,
            }));

            console.log(`🔍 [Music] Search "${searchQuery}" found ${music.length} results`);
            return successResponse(`Search results for "${searchQuery}"`, transformedMusic, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            console.error("❌ [Music] Search error:", error);
            return errorResponse("Search failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            q: t.Optional(t.String()),
            search: t.Optional(t.String()),
            page: t.Optional(t.String()),
            limit: t.Optional(t.String()),
            genre: t.Optional(t.String()),
            artistId: t.Optional(t.String()),
            albumId: t.Optional(t.String()),
        }),
        detail: {
            tags: ["Music"],
            summary: "Search music",
            description: "Search music by title, artist, album, or genre",
        },
    })

    .get("/:id", async ({ params }) => {
        logRequest("GET", `/music/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const music = await prisma.music.findUnique({
                where: { id },
                include: { artist: true, album: true, _count: { select: { musicPlays: true } } },
            });
            if (!music) return errorResponse("Music not found");
            return successResponse("Music retrieved", music);
        } catch (error) {
            return errorResponse("Failed to fetch", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Music"], summary: "Get music by ID" } })

    .post("/", async ({ body }) => {
        logRequest("POST", "/music", body);
        try {
            const { title, albumId, artistId, duration, genre, apiUrl } = body;
            if (!title?.trim()) return errorResponse("Title required");
            if (!apiUrl?.trim()) return errorResponse("API URL required");
            const artist = await prisma.artist.findUnique({ where: { id: artistId } });
            if (!artist) return errorResponse("Artist not found");
            const album = await prisma.album.findUnique({ where: { id: albumId } });
            if (!album) return errorResponse("Album not found");
            const music = await prisma.music.create({
                data: { title: title.trim(), albumId, artistId, duration, genre, apiUrl },
                include: { artist: true, album: true },
            });
            return successResponse("Music created", music);
        } catch (error) {
            return errorResponse("Failed to create", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            title: t.String(), albumId: t.Number(), artistId: t.Number(),
            duration: t.Optional(t.String()), genre: t.Optional(t.String()), apiUrl: t.String(),
        }),
        detail: { tags: ["Music"], summary: "Create music" },
    })

    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/music/${params.id}`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.music.findUnique({ where: { id } });
            if (!existing) return errorResponse("Music not found");
            const { title, albumId, artistId, duration, genre, apiUrl } = body;
            if (artistId) {
                const artist = await prisma.artist.findUnique({ where: { id: artistId } });
                if (!artist) return errorResponse("Artist not found");
            }
            if (albumId) {
                const album = await prisma.album.findUnique({ where: { id: albumId } });
                if (!album) return errorResponse("Album not found");
            }
            const music = await prisma.music.update({
                where: { id },
                data: {
                    ...(title && { title: title.trim() }), ...(albumId && { albumId }),
                    ...(artistId && { artistId }), ...(duration !== undefined && { duration }),
                    ...(genre !== undefined && { genre }), ...(apiUrl && { apiUrl }),
                },
                include: { artist: true, album: true },
            });
            return successResponse("Music updated", music);
        } catch (error) {
            return errorResponse("Failed to update", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            title: t.Optional(t.String()), albumId: t.Optional(t.Number()), artistId: t.Optional(t.Number()),
            duration: t.Optional(t.String()), genre: t.Optional(t.String()), apiUrl: t.Optional(t.String()),
        }),
        detail: { tags: ["Music"], summary: "Update music" },
    })

    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/music/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.music.findUnique({ where: { id } });
            if (!existing) return errorResponse("Music not found");
            await prisma.music.delete({ where: { id } });
            return successResponse("Music deleted", { id, title: existing.title });
        } catch (error) {
            return errorResponse("Failed to delete", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Music"], summary: "Delete music" } })

    .post("/:id/play", async ({ params, body, request }) => {
        logRequest("POST", `/music/${params.id}/play`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const music = await prisma.music.findUnique({ where: { id } });
            if (!music) return errorResponse("Music not found");
            const { userId, device } = (body || {}) as { userId?: number; device?: string };
            const ip = request.headers.get("x-forwarded-for") || "unknown";
            const play = await prisma.musicPlay.create({
                data: { musicId: id, userId, ip: ip.substring(0, 45), device: device?.substring(0, 255) },
            });
            return successResponse("Play recorded", { playId: play.id, musicId: id, playedAt: play.playedAt });
        } catch (error) {
            return errorResponse("Failed to record play", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Optional(t.Object({ userId: t.Optional(t.Number()), device: t.Optional(t.String()) })),
        detail: { tags: ["Music"], summary: "Record play" },
    })

    .get("/:id/plays", async ({ params }) => {
        logRequest("GET", `/music/${params.id}/plays`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const music = await prisma.music.findUnique({ where: { id } });
            if (!music) return errorResponse("Music not found");
            const totalPlays = await prisma.musicPlay.count({ where: { musicId: id } });
            const last24h = await prisma.musicPlay.count({
                where: { musicId: id, playedAt: { gte: new Date(Date.now() - 86400000) } },
            });
            const recentPlays = await prisma.musicPlay.findMany({
                where: { musicId: id }, orderBy: { playedAt: "desc" }, take: 10,
            });
            return successResponse("Stats retrieved", { musicId: id, totalPlays, playsLast24Hours: last24h, recentPlays });
        } catch (error) {
            return errorResponse("Failed to fetch stats", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Music"], summary: "Get play stats" } });
