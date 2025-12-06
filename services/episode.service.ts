/**
 * Episode Service
 * ================
 * CRUD operations untuk Episode entity.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

export const episodeService = new Elysia({ prefix: "/episodes" })
    .get("/", async ({ query }) => {
        logRequest("GET", "/episodes", query);
        try {
            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });
            const where: any = {};
            if (query.seriesId) where.series_id = Number(query.seriesId);
            if (query.season) where.season_number = Number(query.season);

            logDbOperation("READ", "Episode", `Fetching page ${page}`);
            const totalItems = await prisma.episode.count({ where });
            const episodes = await prisma.episode.findMany({
                where, skip, take,
                orderBy: [{ series_id: "asc" }, { season_number: "asc" }, { episode_number: "asc" }],
                include: {
                    video: { select: { id: true, title: true, thumbnail: true, duration: true, api_url: true } },
                    series: { select: { id: true, title: true } },
                },
            });
            console.log(`✅ [Episode] Retrieved ${episodes.length} episodes`);
            return successResponse("Episodes retrieved", episodes, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            console.error("❌ [Episode] Error:", error);
            return errorResponse("Failed to fetch episodes", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            seriesId: t.Optional(t.String()), season: t.Optional(t.String()),
        }),
        detail: { tags: ["Episodes"], summary: "Get all episodes" },
    })

    .get("/:id", async ({ params }) => {
        logRequest("GET", `/episodes/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const episode = await prisma.episode.findUnique({
                where: { id },
                include: { video: true, series: true },
            });
            if (!episode) return errorResponse("Episode not found");
            console.log(`✅ [Episode] Found: S${episode.season_number}E${episode.episode_number}`);
            return successResponse("Episode retrieved", episode);
        } catch (error) {
            return errorResponse("Failed to fetch episode", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Episodes"], summary: "Get episode by ID" } })

    .post("/", async ({ body }) => {
        logRequest("POST", "/episodes", body);
        try {
            const { title, description, thumbnail, api_url, duration, series_id, season_number, episode_number } = body;
            if (!title?.trim()) return errorResponse("Title required");
            if (!api_url?.trim()) return errorResponse("API URL required");
            if (!series_id) return errorResponse("Series ID required");
            if (season_number === undefined) return errorResponse("Season number required");
            if (episode_number === undefined) return errorResponse("Episode number required");

            // Verify series exists
            const series = await prisma.series.findUnique({ where: { id: series_id } });
            if (!series) return errorResponse("Series not found");

            logDbOperation("CREATE", "Episode", `Creating: ${title} (S${season_number}E${episode_number})`);

            // Create video first, then episode
            const result = await prisma.$transaction(async (tx) => {
                const video = await tx.video.create({
                    data: { title: title.trim(), description: description?.trim(), thumbnail, api_url, type: "episode", duration },
                });
                const episode = await tx.episode.create({
                    data: { video_id: video.id, series_id, season_number, episode_number },
                    include: { video: true, series: true },
                });
                return episode;
            });

            console.log(`✅ [Episode] Created: ${result.video.title} (ID: ${result.id})`);
            return successResponse("Episode created", result);
        } catch (error) {
            console.error("❌ [Episode] Error creating:", error);
            return errorResponse("Failed to create episode", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            title: t.String(), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            api_url: t.String(), duration: t.Optional(t.String()),
            series_id: t.Number(), season_number: t.Number(), episode_number: t.Number(),
        }),
        detail: { tags: ["Episodes"], summary: "Create episode" },
    })

    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/episodes/${params.id}`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.episode.findUnique({ where: { id }, include: { video: true } });
            if (!existing) return errorResponse("Episode not found");

            const { title, description, thumbnail, api_url, duration, series_id, season_number, episode_number } = body;

            // Verify new series if changing
            if (series_id) {
                const series = await prisma.series.findUnique({ where: { id: series_id } });
                if (!series) return errorResponse("Series not found");
            }

            const result = await prisma.$transaction(async (tx) => {
                // Update video
                await tx.video.update({
                    where: { id: existing.video_id },
                    data: {
                        ...(title && { title: title.trim() }), ...(description !== undefined && { description: description?.trim() }),
                        ...(thumbnail !== undefined && { thumbnail }), ...(api_url && { api_url }),
                        ...(duration !== undefined && { duration }),
                    },
                });
                // Update episode
                const episode = await tx.episode.update({
                    where: { id },
                    data: {
                        ...(series_id && { series_id }), ...(season_number !== undefined && { season_number }),
                        ...(episode_number !== undefined && { episode_number }),
                    },
                    include: { video: true, series: true },
                });
                return episode;
            });

            console.log(`✅ [Episode] Updated: S${result.season_number}E${result.episode_number}`);
            return successResponse("Episode updated", result);
        } catch (error) {
            return errorResponse("Failed to update episode", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            title: t.Optional(t.String()), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            api_url: t.Optional(t.String()), duration: t.Optional(t.String()),
            series_id: t.Optional(t.Number()), season_number: t.Optional(t.Number()), episode_number: t.Optional(t.Number()),
        }),
        detail: { tags: ["Episodes"], summary: "Update episode" },
    })

    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/episodes/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.episode.findUnique({ where: { id }, include: { video: true } });
            if (!existing) return errorResponse("Episode not found");

            // Delete video (will cascade to episode)
            await prisma.video.delete({ where: { id: existing.video_id } });

            console.log(`✅ [Episode] Deleted: S${existing.season_number}E${existing.episode_number}`);
            return successResponse("Episode deleted", { id, title: existing.video.title });
        } catch (error) {
            return errorResponse("Failed to delete episode", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Episodes"], summary: "Delete episode" } });
