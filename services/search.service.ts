/**
 * Search Service
 * ===============
 * Unified search untuk Music dan Video.
 * 
 * Endpoints:
 * - GET /search           - Search semua (music + video)
 * - GET /search/music     - Search music saja
 * - GET /search/video     - Search video saja
 */

//test perubahan deh

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest,
    logDbOperation,
    successResponse,
    errorResponse,
    parsePagination,
    createPaginationMeta,
    formatAlbumCoverUrl,
    formatArtistImageUrl,
    formatVideoThumbnailUrl,
} from "../utils/helpers";

export const searchService = new Elysia({ prefix: "/search" })
    // =====================
    // UNIFIED SEARCH (Music + Video)
    // =====================
    .get("/", async ({ query }) => {
        logRequest("GET", "/search", query);
        try {
            const searchQuery = query.q || query.search;
            if (!searchQuery) {
                return errorResponse("Search query required", "Please provide ?q= or ?search= parameter");
            }

            const { page, limit } = parsePagination({
                page: Number(query.page),
                limit: Number(query.limit),
            });

            // Limit untuk masing-masing type
            const musicLimit = query.type === "video" ? 0 : Math.ceil(limit / 2);
            const videoLimit = query.type === "music" ? 0 : Math.ceil(limit / 2);

            logDbOperation("READ", "Music+Video", `Unified search: "${searchQuery}"`);

            // Search Music
            let musicResults: any[] = [];
            let musicTotal = 0;
            if (query.type !== "video") {
                const musicWhere = {
                    OR: [
                        { title: { contains: searchQuery, mode: "insensitive" as const } },
                        { genre: { contains: searchQuery, mode: "insensitive" as const } },
                        { artist: { name: { contains: searchQuery, mode: "insensitive" as const } } },
                        { album: { title: { contains: searchQuery, mode: "insensitive" as const } } },
                    ],
                };
                musicTotal = await prisma.music.count({ where: musicWhere });
                const rawMusic = await prisma.music.findMany({
                    where: musicWhere,
                    take: musicLimit,
                    orderBy: { createdAt: "desc" },
                    include: {
                        artist: { select: { id: true, name: true, image: true } },
                        album: { select: { id: true, title: true, coverImage: true } },
                        _count: { select: { musicPlays: true } },
                    },
                });
                musicResults = rawMusic.map(m => ({
                    ...m,
                    type: "music",
                    artist: m.artist ? { ...m.artist, image: formatArtistImageUrl(m.artist.image) } : null,
                    album: m.album ? { ...m.album, coverImage: formatAlbumCoverUrl(m.album.coverImage) } : null,
                }));
            }

            // Search Video
            let videoResults: any[] = [];
            let videoTotal = 0;
            if (query.type !== "music") {
                try {
                    const videoWhere = {
                        OR: [
                            { title: { contains: searchQuery, mode: "insensitive" as const } },
                            { description: { contains: searchQuery, mode: "insensitive" as const } },
                        ],
                    };
                    videoTotal = await prisma.video.count({ where: videoWhere });
                    const rawVideo = await prisma.video.findMany({
                        where: videoWhere,
                        take: videoLimit,
                        orderBy: { createdAt: "desc" },
                        include: {
                            movie: { select: { id: true, director: true, genre: true } },
                            _count: { select: { episodes: true } },
                        },
                    });
                    videoResults = rawVideo.map(v => ({
                        ...v,
                        type: "video",
                        thumbnail: formatVideoThumbnailUrl(v.thumbnail),
                    }));
                } catch (videoError) {
                    console.error("❌ [Search] Video search error:", videoError);
                    // Continue with empty video results
                }
            }

            const totalItems = musicTotal + videoTotal;
            console.log(`🔍 [Search] "${searchQuery}" found ${musicResults.length} music + ${videoResults.length} video`);

            return successResponse(`Search results for "${searchQuery}"`, {
                music: {
                    items: musicResults,
                    total: musicTotal,
                },
                video: {
                    items: videoResults,
                    total: videoTotal,
                },
                combined: [...musicResults, ...videoResults],
            }, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            console.error("❌ [Search] Error:", error);
            return errorResponse("Search failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            q: t.Optional(t.String()),
            search: t.Optional(t.String()),
            page: t.Optional(t.String()),
            limit: t.Optional(t.String()),
            type: t.Optional(t.String()), // "music", "video", atau kosong untuk semua
        }),
        detail: {
            tags: ["Search"],
            summary: "Unified search",
            description: "Search music and video simultaneously. Use ?type=music or ?type=video to filter.",
        },
    })

    // =====================
    // SEARCH MUSIC ONLY
    // =====================
    .get("/music", async ({ query }) => {
        logRequest("GET", "/search/music", query);
        try {
            const searchQuery = query.q || query.search;
            if (!searchQuery) {
                return errorResponse("Search query required");
            }

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page),
                limit: Number(query.limit),
            });

            const where: any = {
                OR: [
                    { title: { contains: searchQuery, mode: "insensitive" as const } },
                    { genre: { contains: searchQuery, mode: "insensitive" as const } },
                    { artist: { name: { contains: searchQuery, mode: "insensitive" as const } } },
                    { album: { title: { contains: searchQuery, mode: "insensitive" as const } } },
                ],
            };

            if (query.genre) {
                where.AND = [{ genre: { contains: query.genre } }];
            }

            logDbOperation("READ", "Music", `Search: "${searchQuery}"`);
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

            const transformed = music.map(m => ({
                ...m,
                artist: m.artist ? { ...m.artist, image: formatArtistImageUrl(m.artist.image) } : null,
                album: m.album ? { ...m.album, coverImage: formatAlbumCoverUrl(m.album.coverImage) } : null,
            }));

            console.log(`🔍 [Search] Music "${searchQuery}" found ${music.length} results`);
            return successResponse(`Music search results for "${searchQuery}"`, transformed, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Search failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            q: t.Optional(t.String()),
            search: t.Optional(t.String()),
            page: t.Optional(t.String()),
            limit: t.Optional(t.String()),
            genre: t.Optional(t.String()),
        }),
        detail: {
            tags: ["Search"],
            summary: "Search music",
            description: "Search music by title, artist, album, or genre",
        },
    })

    // =====================
    // SEARCH VIDEO ONLY
    // =====================
    .get("/video", async ({ query }) => {
        logRequest("GET", "/search/video", query);
        try {
            const searchQuery = query.q || query.search;
            if (!searchQuery) {
                return errorResponse("Search query required");
            }

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page),
                limit: Number(query.limit),
            });

            const where: any = {
                OR: [
                    { title: { contains: searchQuery, mode: "insensitive" as const } },
                    { description: { contains: searchQuery, mode: "insensitive" as const } },
                ],
            };

            if (query.type) {
                where.type = query.type;
            }
            if (query.year) {
                where.release_year = parseInt(query.year, 10);
            }

            logDbOperation("READ", "Video", `Search: "${searchQuery}"`);
            const totalItems = await prisma.video.count({ where });
            const videos = await prisma.video.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    movie: { select: { id: true, director: true, genre: true } },
                    _count: { select: { episodes: true } },
                },
            });

            const transformed = videos.map(v => ({
                ...v,
                thumbnail: formatVideoThumbnailUrl(v.thumbnail),
            }));

            console.log(`🔍 [Search] Video "${searchQuery}" found ${videos.length} results`);
            return successResponse(`Video search results for "${searchQuery}"`, transformed, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Search failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            q: t.Optional(t.String()),
            search: t.Optional(t.String()),
            page: t.Optional(t.String()),
            limit: t.Optional(t.String()),
            type: t.Optional(t.String()), // "movie" atau "episode"
            year: t.Optional(t.String()),
        }),
        detail: {
            tags: ["Search"],
            summary: "Search video",
            description: "Search video by title or description",
        },
    });
