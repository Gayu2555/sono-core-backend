/**
 * Album Service
 * ==============
 * CRUD operations untuk Album entity.
 * 
 * Endpoints:
 * - GET    /albums           - Get all albums (paginated)
 * - GET    /albums/:id       - Get album by ID
 * - POST   /albums           - Create new album
 * - PUT    /albums/:id       - Update album
 * - DELETE /albums/:id       - Delete album
 * - GET    /albums/:id/music - Get music in album
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
import type { CreateAlbumRequest, UpdateAlbumRequest } from "../types";

export const albumService = new Elysia({ prefix: "/albums" })
    // =====================
    // GET ALL ALBUMS
    // =====================
    .get(
        "/",
        async ({ query }) => {
            logRequest("GET", "/albums", query);

            try {
                const { skip, take, page, limit } = parsePagination({
                    page: Number(query.page),
                    limit: Number(query.limit),
                });

                logDbOperation("READ", "Album", `Fetching page ${page} with limit ${limit}`);

                // Get total count
                const totalItems = await prisma.album.count();
                console.log(`📊 [Album] Total albums in database: ${totalItems}`);

                // Get albums with pagination
                const albums = await prisma.album.findMany({
                    skip,
                    take,
                    orderBy: { createdAt: "desc" },
                    include: {
                        artist: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                            },
                        },
                        _count: {
                            select: {
                                music: true,
                            },
                        },
                    },
                });

                console.log(`✅ [Album] Retrieved ${albums.length} albums`);

                const meta = createPaginationMeta(totalItems, page, limit);

                // Transform image URLs
                const transformedAlbums = albums.map(a => ({
                    ...a,
                    coverImage: formatAlbumCoverUrl(a.coverImage),
                    artist: a.artist ? { ...a.artist, image: formatArtistImageUrl(a.artist.image) } : null,
                }));

                return successResponse("Albums retrieved successfully", transformedAlbums, meta);
            } catch (error) {
                console.error("❌ [Album] Error fetching albums:", error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch albums", message);
            }
        },
        {
            query: t.Object({
                page: t.Optional(t.String()),
                limit: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Albums"],
                summary: "Get all albums",
                description: "Retrieve all albums with pagination support",
            },
        }
    )

    // =====================
    // GET ALBUM BY ID
    // =====================
    .get(
        "/:id",
        async ({ params }) => {
            logRequest("GET", `/albums/${params.id}`);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Album] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid album ID", "ID must be a positive integer");
            }

            try {
                logDbOperation("READ", "Album", `Fetching album with ID: ${id}`);

                const album = await prisma.album.findUnique({
                    where: { id },
                    include: {
                        artist: true,
                        music: {
                            orderBy: { createdAt: "asc" },
                            include: {
                                _count: {
                                    select: { musicPlays: true },
                                },
                            },
                        },
                        _count: {
                            select: {
                                music: true,
                            },
                        },
                    },
                });

                if (!album) {
                    console.warn(`⚠️ [Album] Album not found with ID: ${id}`);
                    return errorResponse("Album not found", `No album found with ID: ${id}`);
                }

                console.log(`✅ [Album] Found album: ${album.title} (ID: ${id})`);

                // Transform image URLs
                const transformedAlbum = {
                    ...album,
                    coverImage: formatAlbumCoverUrl(album.coverImage),
                    artist: album.artist ? { ...album.artist, image: formatArtistImageUrl(album.artist.image) } : null,
                };

                return successResponse("Album retrieved successfully", transformedAlbum);
            } catch (error) {
                console.error(`❌ [Album] Error fetching album ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch album", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            detail: {
                tags: ["Albums"],
                summary: "Get album by ID",
                description: "Retrieve a specific album by its ID with artist and music",
            },
        }
    )

    // =====================
    // CREATE ALBUM
    // =====================
    .post(
        "/",
        async ({ body }) => {
            logRequest("POST", "/albums", body);

            try {
                const { title, artistId, releaseYear, coverImage, description } = body as CreateAlbumRequest;

                if (!title || title.trim() === "") {
                    console.warn("⚠️ [Album] Title is required");
                    return errorResponse("Validation failed", "Album title is required");
                }

                if (!artistId) {
                    console.warn("⚠️ [Album] Artist ID is required");
                    return errorResponse("Validation failed", "Artist ID is required");
                }

                // Check if artist exists
                const artist = await prisma.artist.findUnique({ where: { id: artistId } });
                if (!artist) {
                    console.warn(`⚠️ [Album] Artist not found with ID: ${artistId}`);
                    return errorResponse("Artist not found", `No artist found with ID: ${artistId}`);
                }

                logDbOperation("CREATE", "Album", `Creating album: ${title} for artist: ${artist.name}`);

                const album = await prisma.album.create({
                    data: {
                        title: title.trim(),
                        artistId,
                        releaseYear,
                        coverImage,
                        description: description?.trim(),
                    },
                    include: {
                        artist: true,
                    },
                });

                console.log(`✅ [Album] Created album: ${album.title} (ID: ${album.id})`);

                return successResponse("Album created successfully", album);
            } catch (error) {
                console.error("❌ [Album] Error creating album:", error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to create album", message);
            }
        },
        {
            body: t.Object({
                title: t.String(),
                artistId: t.Number(),
                releaseYear: t.Optional(t.Number()),
                coverImage: t.Optional(t.String()),
                description: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Albums"],
                summary: "Create new album",
                description: "Create a new album record",
            },
        }
    )

    // =====================
    // UPDATE ALBUM
    // =====================
    .put(
        "/:id",
        async ({ params, body }) => {
            logRequest("PUT", `/albums/${params.id}`, body);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Album] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid album ID", "ID must be a positive integer");
            }

            try {
                // Check if album exists
                const existing = await prisma.album.findUnique({ where: { id } });
                if (!existing) {
                    console.warn(`⚠️ [Album] Album not found with ID: ${id}`);
                    return errorResponse("Album not found", `No album found with ID: ${id}`);
                }

                const { title, artistId, releaseYear, coverImage, description } = body as UpdateAlbumRequest;

                // If changing artist, verify the new artist exists
                if (artistId) {
                    const artist = await prisma.artist.findUnique({ where: { id: artistId } });
                    if (!artist) {
                        console.warn(`⚠️ [Album] Artist not found with ID: ${artistId}`);
                        return errorResponse("Artist not found", `No artist found with ID: ${artistId}`);
                    }
                }

                logDbOperation("UPDATE", "Album", `Updating album ID: ${id}`);

                const album = await prisma.album.update({
                    where: { id },
                    data: {
                        ...(title && { title: title.trim() }),
                        ...(artistId && { artistId }),
                        ...(releaseYear !== undefined && { releaseYear }),
                        ...(coverImage !== undefined && { coverImage }),
                        ...(description !== undefined && { description: description?.trim() }),
                    },
                    include: {
                        artist: true,
                    },
                });

                console.log(`✅ [Album] Updated album: ${album.title} (ID: ${id})`);

                return successResponse("Album updated successfully", album);
            } catch (error) {
                console.error(`❌ [Album] Error updating album ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to update album", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            body: t.Object({
                title: t.Optional(t.String()),
                artistId: t.Optional(t.Number()),
                releaseYear: t.Optional(t.Number()),
                coverImage: t.Optional(t.String()),
                description: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Albums"],
                summary: "Update album",
                description: "Update an existing album by ID",
            },
        }
    )

    // =====================
    // DELETE ALBUM
    // =====================
    .delete(
        "/:id",
        async ({ params }) => {
            logRequest("DELETE", `/albums/${params.id}`);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Album] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid album ID", "ID must be a positive integer");
            }

            try {
                // Check if album exists
                const existing = await prisma.album.findUnique({ where: { id } });
                if (!existing) {
                    console.warn(`⚠️ [Album] Album not found with ID: ${id}`);
                    return errorResponse("Album not found", `No album found with ID: ${id}`);
                }

                logDbOperation("DELETE", "Album", `Deleting album ID: ${id}`);

                await prisma.album.delete({ where: { id } });

                console.log(`✅ [Album] Deleted album: ${existing.title} (ID: ${id})`);

                return successResponse("Album deleted successfully", { id, title: existing.title });
            } catch (error) {
                console.error(`❌ [Album] Error deleting album ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to delete album", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            detail: {
                tags: ["Albums"],
                summary: "Delete album",
                description: "Delete an album by ID (cascades to music)",
            },
        }
    )

    // =====================
    // GET ALBUM'S MUSIC
    // =====================
    .get(
        "/:id/music",
        async ({ params, query }) => {
            logRequest("GET", `/albums/${params.id}/music`, query);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Album] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid album ID", "ID must be a positive integer");
            }

            try {
                // Check if album exists
                const album = await prisma.album.findUnique({ where: { id } });
                if (!album) {
                    console.warn(`⚠️ [Album] Album not found with ID: ${id}`);
                    return errorResponse("Album not found", `No album found with ID: ${id}`);
                }

                const { skip, take, page, limit } = parsePagination({
                    page: Number(query.page),
                    limit: Number(query.limit),
                });

                logDbOperation("READ", "Music", `Fetching music for album ID: ${id}`);

                const totalItems = await prisma.music.count({ where: { albumId: id } });
                const music = await prisma.music.findMany({
                    where: { albumId: id },
                    skip,
                    take,
                    orderBy: { createdAt: "asc" },
                    include: {
                        artist: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        _count: {
                            select: { musicPlays: true },
                        },
                    },
                });

                console.log(`✅ [Album] Found ${music.length} music tracks for album: ${album.title}`);

                const meta = createPaginationMeta(totalItems, page, limit);

                return successResponse(`Music in ${album.title}`, music, meta);
            } catch (error) {
                console.error(`❌ [Album] Error fetching music for album ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch album music", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            query: t.Object({
                page: t.Optional(t.String()),
                limit: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Albums"],
                summary: "Get album's music",
                description: "Retrieve all music tracks in a specific album",
            },
        }
    );
