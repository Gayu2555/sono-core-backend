/**
 * Artist Service
 * ===============
 * CRUD operations untuk Artist entity.
 * 
 * Endpoints:
 * - GET    /artists          - Get all artists (paginated)
 * - GET    /artists/:id      - Get artist by ID
 * - POST   /artists          - Create new artist
 * - PUT    /artists/:id      - Update artist
 * - DELETE /artists/:id      - Delete artist
 * - GET    /artists/:id/albums - Get albums by artist
 * - GET    /artists/:id/music  - Get music by artist
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
    formatArtistImageUrl,
    formatAlbumCoverUrl,
} from "../utils/helpers";
import type { CreateArtistRequest, UpdateArtistRequest } from "../types";

export const artistService = new Elysia({ prefix: "/artists" })
    // =====================
    // GET ALL ARTISTS
    // =====================
    .get(
        "/",
        async ({ query }) => {
            logRequest("GET", "/artists", query);

            try {
                const { skip, take, page, limit } = parsePagination({
                    page: Number(query.page),
                    limit: Number(query.limit),
                });

                logDbOperation("READ", "Artist", `Fetching page ${page} with limit ${limit}`);

                // Get total count
                const totalItems = await prisma.artist.count();
                console.log(`📊 [Artist] Total artists in database: ${totalItems}`);

                // Get artists with pagination
                const artists = await prisma.artist.findMany({
                    skip,
                    take,
                    orderBy: { createdAt: "desc" },
                    include: {
                        _count: {
                            select: {
                                albums: true,
                                music: true,
                            },
                        },
                    },
                });

                console.log(`✅ [Artist] Retrieved ${artists.length} artists`);

                const meta = createPaginationMeta(totalItems, page, limit);

                // Transform image URLs
                const transformedArtists = artists.map(a => ({
                    ...a,
                    image: formatArtistImageUrl(a.image),
                }));

                return successResponse("Artists retrieved successfully", transformedArtists, meta);
            } catch (error) {
                console.error("❌ [Artist] Error fetching artists:", error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch artists", message);
            }
        },
        {
            query: t.Object({
                page: t.Optional(t.String()),
                limit: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Artists"],
                summary: "Get all artists",
                description: "Retrieve all artists with pagination support",
            },
        }
    )

    // =====================
    // GET ARTIST BY ID
    // =====================
    .get(
        "/:id",
        async ({ params }) => {
            logRequest("GET", `/artists/${params.id}`);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Artist] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid artist ID", "ID must be a positive integer");
            }

            try {
                logDbOperation("READ", "Artist", `Fetching artist with ID: ${id}`);

                const artist = await prisma.artist.findUnique({
                    where: { id },
                    include: {
                        albums: {
                            orderBy: { releaseYear: "desc" },
                        },
                        music: {
                            orderBy: { createdAt: "desc" },
                            take: 10,
                        },
                        _count: {
                            select: {
                                albums: true,
                                music: true,
                            },
                        },
                    },
                });

                if (!artist) {
                    console.warn(`⚠️ [Artist] Artist not found with ID: ${id}`);
                    return errorResponse("Artist not found", `No artist found with ID: ${id}`);
                }

                console.log(`✅ [Artist] Found artist: ${artist.name} (ID: ${id})`);

                // Transform image URLs
                const transformedArtist = {
                    ...artist,
                    image: formatArtistImageUrl(artist.image),
                    albums: artist.albums.map(a => ({ ...a, coverImage: formatAlbumCoverUrl(a.coverImage) })),
                };

                return successResponse("Artist retrieved successfully", transformedArtist);
            } catch (error) {
                console.error(`❌ [Artist] Error fetching artist ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch artist", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            detail: {
                tags: ["Artists"],
                summary: "Get artist by ID",
                description: "Retrieve a specific artist by their ID with albums and music",
            },
        }
    )

    // =====================
    // CREATE ARTIST
    // =====================
    .post(
        "/",
        async ({ body }) => {
            logRequest("POST", "/artists", body);

            try {
                const { name, bio, image } = body as CreateArtistRequest;

                if (!name || name.trim() === "") {
                    console.warn("⚠️ [Artist] Name is required");
                    return errorResponse("Validation failed", "Artist name is required");
                }

                logDbOperation("CREATE", "Artist", `Creating artist: ${name}`);

                const artist = await prisma.artist.create({
                    data: {
                        name: name.trim(),
                        bio: bio?.trim(),
                        image,
                    },
                });

                console.log(`✅ [Artist] Created artist: ${artist.name} (ID: ${artist.id})`);

                return successResponse("Artist created successfully", artist);
            } catch (error) {
                console.error("❌ [Artist] Error creating artist:", error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to create artist", message);
            }
        },
        {
            body: t.Object({
                name: t.String(),
                bio: t.Optional(t.String()),
                image: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Artists"],
                summary: "Create new artist",
                description: "Create a new artist record",
            },
        }
    )

    // =====================
    // UPDATE ARTIST
    // =====================
    .put(
        "/:id",
        async ({ params, body }) => {
            logRequest("PUT", `/artists/${params.id}`, body);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Artist] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid artist ID", "ID must be a positive integer");
            }

            try {
                // Check if artist exists
                const existing = await prisma.artist.findUnique({ where: { id } });
                if (!existing) {
                    console.warn(`⚠️ [Artist] Artist not found with ID: ${id}`);
                    return errorResponse("Artist not found", `No artist found with ID: ${id}`);
                }

                const { name, bio, image } = body as UpdateArtistRequest;

                logDbOperation("UPDATE", "Artist", `Updating artist ID: ${id}`);

                const artist = await prisma.artist.update({
                    where: { id },
                    data: {
                        ...(name && { name: name.trim() }),
                        ...(bio !== undefined && { bio: bio?.trim() }),
                        ...(image !== undefined && { image }),
                    },
                });

                console.log(`✅ [Artist] Updated artist: ${artist.name} (ID: ${id})`);

                return successResponse("Artist updated successfully", artist);
            } catch (error) {
                console.error(`❌ [Artist] Error updating artist ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to update artist", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            body: t.Object({
                name: t.Optional(t.String()),
                bio: t.Optional(t.String()),
                image: t.Optional(t.String()),
            }),
            detail: {
                tags: ["Artists"],
                summary: "Update artist",
                description: "Update an existing artist by ID",
            },
        }
    )

    // =====================
    // DELETE ARTIST
    // =====================
    .delete(
        "/:id",
        async ({ params }) => {
            logRequest("DELETE", `/artists/${params.id}`);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Artist] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid artist ID", "ID must be a positive integer");
            }

            try {
                // Check if artist exists
                const existing = await prisma.artist.findUnique({ where: { id } });
                if (!existing) {
                    console.warn(`⚠️ [Artist] Artist not found with ID: ${id}`);
                    return errorResponse("Artist not found", `No artist found with ID: ${id}`);
                }

                logDbOperation("DELETE", "Artist", `Deleting artist ID: ${id}`);

                await prisma.artist.delete({ where: { id } });

                console.log(`✅ [Artist] Deleted artist: ${existing.name} (ID: ${id})`);

                return successResponse("Artist deleted successfully", { id, name: existing.name });
            } catch (error) {
                console.error(`❌ [Artist] Error deleting artist ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to delete artist", message);
            }
        },
        {
            params: t.Object({
                id: t.String(),
            }),
            detail: {
                tags: ["Artists"],
                summary: "Delete artist",
                description: "Delete an artist by ID (cascades to albums and music)",
            },
        }
    )

    // =====================
    // GET ARTIST'S ALBUMS
    // =====================
    .get(
        "/:id/albums",
        async ({ params, query }) => {
            logRequest("GET", `/artists/${params.id}/albums`, query);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Artist] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid artist ID", "ID must be a positive integer");
            }

            try {
                // Check if artist exists
                const artist = await prisma.artist.findUnique({ where: { id } });
                if (!artist) {
                    console.warn(`⚠️ [Artist] Artist not found with ID: ${id}`);
                    return errorResponse("Artist not found", `No artist found with ID: ${id}`);
                }

                const { skip, take, page, limit } = parsePagination({
                    page: Number(query.page),
                    limit: Number(query.limit),
                });

                logDbOperation("READ", "Album", `Fetching albums for artist ID: ${id}`);

                const totalItems = await prisma.album.count({ where: { artistId: id } });
                const albums = await prisma.album.findMany({
                    where: { artistId: id },
                    skip,
                    take,
                    orderBy: { releaseYear: "desc" },
                    include: {
                        _count: {
                            select: { music: true },
                        },
                    },
                });

                console.log(`✅ [Artist] Found ${albums.length} albums for artist: ${artist.name}`);

                const meta = createPaginationMeta(totalItems, page, limit);

                return successResponse(`Albums for ${artist.name}`, albums, meta);
            } catch (error) {
                console.error(`❌ [Artist] Error fetching albums for artist ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch artist albums", message);
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
                tags: ["Artists"],
                summary: "Get artist's albums",
                description: "Retrieve all albums by a specific artist",
            },
        }
    )

    // =====================
    // GET ARTIST'S MUSIC
    // =====================
    .get(
        "/:id/music",
        async ({ params, query }) => {
            logRequest("GET", `/artists/${params.id}/music`, query);

            const id = parseId(params.id);
            if (!id) {
                console.warn(`⚠️ [Artist] Invalid ID provided: ${params.id}`);
                return errorResponse("Invalid artist ID", "ID must be a positive integer");
            }

            try {
                // Check if artist exists
                const artist = await prisma.artist.findUnique({ where: { id } });
                if (!artist) {
                    console.warn(`⚠️ [Artist] Artist not found with ID: ${id}`);
                    return errorResponse("Artist not found", `No artist found with ID: ${id}`);
                }

                const { skip, take, page, limit } = parsePagination({
                    page: Number(query.page),
                    limit: Number(query.limit),
                });

                logDbOperation("READ", "Music", `Fetching music for artist ID: ${id}`);

                const totalItems = await prisma.music.count({ where: { artistId: id } });
                const music = await prisma.music.findMany({
                    where: { artistId: id },
                    skip,
                    take,
                    orderBy: { createdAt: "desc" },
                    include: {
                        album: true,
                    },
                });

                console.log(`✅ [Artist] Found ${music.length} music tracks for artist: ${artist.name}`);

                const meta = createPaginationMeta(totalItems, page, limit);

                return successResponse(`Music by ${artist.name}`, music, meta);
            } catch (error) {
                console.error(`❌ [Artist] Error fetching music for artist ${id}:`, error);
                const message = error instanceof Error ? error.message : "Unknown error";
                return errorResponse("Failed to fetch artist music", message);
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
                tags: ["Artists"],
                summary: "Get artist's music",
                description: "Retrieve all music tracks by a specific artist",
            },
        }
    );
