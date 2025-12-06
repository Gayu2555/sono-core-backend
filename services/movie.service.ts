

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";

import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

export const movieService = new Elysia({ prefix: "/movies" })
    .get("/", async ({ query }) => {
        logRequest("GET", "/movies", query);
        try {
            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });
            const where: any = {};
            if (query.genre) where.genre = { contains: query.genre };
            if (query.director) where.director = { contains: query.director };

            logDbOperation("READ", "Movie", `Fetching page ${page}`);
            const totalItems = await prisma.movie.count({ where });
            const movies = await prisma.movie.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: {
                    video: { select: { id: true, title: true, description: true, thumbnail: true, api_url: true, release_year: true, duration: true } },
                },
            });
            console.log(`✅ [Movie] Retrieved ${movies.length} movies`);
            return successResponse("Movies retrieved", movies, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            console.error("❌ [Movie] Error:", error);
            return errorResponse("Failed to fetch movies", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            genre: t.Optional(t.String()), director: t.Optional(t.String()),
        }),
        detail: { tags: ["Movies"], summary: "Get all movies" },
    })

    .get("/:id", async ({ params }) => {
        logRequest("GET", `/movies/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const movie = await prisma.movie.findUnique({
                where: { id },
                include: { video: true },
            });
            if (!movie) return errorResponse("Movie not found");
            console.log(`✅ [Movie] Found: ${movie.video.title}`);
            return successResponse("Movie retrieved", movie);
        } catch (error) {
            return errorResponse("Failed to fetch movie", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Movies"], summary: "Get movie by ID" } })

    .post("/", async ({ body }) => {
        logRequest("POST", "/movies", body);
        try {
            const { title, description, thumbnail, api_url, release_year, duration, director, cast, genre } = body;
            if (!title?.trim()) return errorResponse("Title required");
            if (!api_url?.trim()) return errorResponse("API URL required");

            logDbOperation("CREATE", "Movie", `Creating: ${title}`);

            // Create video first, then movie
            const result = await prisma.$transaction(async (tx) => {
                const video = await tx.video.create({
                    data: { title: title.trim(), description: description?.trim(), thumbnail, api_url, type: "movie", release_year, duration },
                });
                const movie = await tx.movie.create({
                    data: { video_id: video.id, director, cast, genre },
                    include: { video: true },
                });
                return movie;
            });

            console.log(`✅ [Movie] Created: ${result.video.title} (ID: ${result.id})`);
            return successResponse("Movie created", result);
        } catch (error) {
            console.error("❌ [Movie] Error creating:", error);
            return errorResponse("Failed to create movie", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            title: t.String(), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            api_url: t.String(), release_year: t.Optional(t.Number()), duration: t.Optional(t.String()),
            director: t.Optional(t.String()), cast: t.Optional(t.String()), genre: t.Optional(t.String()),
        }),
        detail: { tags: ["Movies"], summary: "Create movie" },
    })

    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/movies/${params.id}`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.movie.findUnique({ where: { id }, include: { video: true } });
            if (!existing) return errorResponse("Movie not found");

            const { title, description, thumbnail, api_url, release_year, duration, director, cast, genre } = body;

            const result = await prisma.$transaction(async (tx) => {
                // Update video
                await tx.video.update({
                    where: { id: existing.video_id },
                    data: {
                        ...(title && { title: title.trim() }), ...(description !== undefined && { description: description?.trim() }),
                        ...(thumbnail !== undefined && { thumbnail }), ...(api_url && { api_url }),
                        ...(release_year !== undefined && { release_year }), ...(duration !== undefined && { duration }),
                    },
                });
                // Update movie
                const movie = await tx.movie.update({
                    where: { id },
                    data: {
                        ...(director !== undefined && { director }), ...(cast !== undefined && { cast }), ...(genre !== undefined && { genre }),
                    },
                    include: { video: true },
                });
                return movie;
            });

            console.log(`✅ [Movie] Updated: ${result.video.title}`);
            return successResponse("Movie updated", result);
        } catch (error) {
            return errorResponse("Failed to update movie", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            title: t.Optional(t.String()), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            api_url: t.Optional(t.String()), release_year: t.Optional(t.Number()), duration: t.Optional(t.String()),
            director: t.Optional(t.String()), cast: t.Optional(t.String()), genre: t.Optional(t.String()),
        }),
        detail: { tags: ["Movies"], summary: "Update movie" },
    })

    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/movies/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.movie.findUnique({ where: { id }, include: { video: true } });
            if (!existing) return errorResponse("Movie not found");

            // Delete video (will cascade to movie due to onDelete: Cascade)
            await prisma.video.delete({ where: { id: existing.video_id } });

            console.log(`✅ [Movie] Deleted: ${existing.video.title}`);
            return successResponse("Movie deleted", { id, title: existing.video.title });
        } catch (error) {
            return errorResponse("Failed to delete movie", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Movies"], summary: "Delete movie" } });
