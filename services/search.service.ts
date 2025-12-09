/**
 * Search Service
 * ===============
 * Unified search untuk Music, Video, dan Series.
 * 
 * Endpoints:
 * - GET /search           - Search semua (music + video + series)
 * - GET /search/music     - Search music saja
 * - GET /search/video     - Search video saja
 * - GET /search/series    - Search series saja
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
    formatAlbumCoverUrl,
    formatArtistImageUrl,
    formatVideoThumbnailUrl,
    formatSeriesThumbnailUrl,
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
                        { title: { contains: searchQuery } },
                        { genre: { contains: searchQuery } },
                        { artist: { name: { contains: searchQuery } } },
                        { album: { title: { contains: searchQuery } } },
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
                            { title: { contains: searchQuery } },
                            { description: { contains: searchQuery } },
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

            // Search Series
            let seriesResults: any[] = [];
            let seriesTotal = 0;
            if (query.type !== "music" && query.type !== "video") {
                try {
                    const seriesWhere = {
                        OR: [
                            { title: { contains: searchQuery } },
                            { description: { contains: searchQuery } },
                        ],
                    };
                    seriesTotal = await prisma.series.count({ where: seriesWhere });
                    const rawSeries = await prisma.series.findMany({
                        where: seriesWhere,
                        take: Math.ceil(limit / 3),
                        orderBy: { createdAt: "desc" },
                        include: {
                            _count: { select: { episodes: true } },
                        },
                    });
                    seriesResults = rawSeries.map(s => ({
                        ...s,
                        type: "series",
                        thumbnail: formatSeriesThumbnailUrl(s.thumbnail),
                    }));
                } catch (seriesError) {
                    console.error("❌ [Search] Series search error:", seriesError);
                }
            }

            const totalItems = musicTotal + videoTotal + seriesTotal;
            console.log(`🔍 [Search] "${searchQuery}" found ${musicResults.length} music + ${videoResults.length} video + ${seriesResults.length} series`);

            return successResponse(`Search results for "${searchQuery}"`, {
                music: {
                    items: musicResults,
                    total: musicTotal,
                },
                video: {
                    items: videoResults,
                    total: videoTotal,
                },
                series: {
                    items: seriesResults,
                    total: seriesTotal,
                },
                combined: [...musicResults, ...videoResults, ...seriesResults],
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
                    { title: { contains: searchQuery } },
                    { genre: { contains: searchQuery } },
                    { artist: { name: { contains: searchQuery } } },
                    { album: { title: { contains: searchQuery } } },
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
                    { title: { contains: searchQuery } },
                    { description: { contains: searchQuery } },
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
    })

    // =====================
    // SEARCH SERIES ONLY
    // =====================
    .get("/series", async ({ query }) => {
        logRequest("GET", "/search/series", query);
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
                    { title: { contains: searchQuery } },
                    { description: { contains: searchQuery } },
                ],
            };

            if (query.year) {
                where.start_year = parseInt(query.year, 10);
            }

            logDbOperation("READ", "Series", `Search: "${searchQuery}"`);
            const totalItems = await prisma.series.count({ where });
            const series = await prisma.series.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    _count: { select: { episodes: true } },
                },
            });

            const transformed = series.map(s => ({
                ...s,
                thumbnail: formatSeriesThumbnailUrl(s.thumbnail),
            }));

            console.log(`🔍 [Search] Series "${searchQuery}" found ${series.length} results`);
            return successResponse(`Series search results for "${searchQuery}"`, transformed, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Search failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            q: t.Optional(t.String()),
            search: t.Optional(t.String()),
            page: t.Optional(t.String()),
            limit: t.Optional(t.String()),
            year: t.Optional(t.String()),
        }),
        detail: {
            tags: ["Search"],
            summary: "Search series",
            description: "Search series by title or description",
        },
    });
