/**
 * Series Service
 * ===============
 * CRUD operations untuk Series entity.
 */
//Kita kasih dikit dikit biar ada perubahan sedikit

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

export const seriesService = new Elysia({ prefix: "/series" })
    .get("/", async ({ query }) => {
        logRequest("GET", "/series", query);
        try {
            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });
            const where: any = {};
            if (query.q) where.title = { contains: query.q };
            if (query.year) where.start_year = Number(query.year);

            logDbOperation("READ", "Series", `Fetching page ${page}`);
            const totalItems = await prisma.series.count({ where });
            const series = await prisma.series.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: { _count: { select: { episodes: true } } },
            });
            console.log(`✅ [Series] Retrieved ${series.length} series`);
            return successResponse("Series retrieved", series, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            console.error("❌ [Series] Error:", error);
            return errorResponse("Failed to fetch series", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            q: t.Optional(t.String()), year: t.Optional(t.String()),
        }),
        detail: { tags: ["Series"], summary: "Get all series" },
    })

    .get("/:id", async ({ params }) => {
        logRequest("GET", `/series/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const series = await prisma.series.findUnique({
                where: { id },
                include: {
                    episodes: {
                        orderBy: [{ season_number: "asc" }, { episode_number: "asc" }],
                        include: { video: { select: { id: true, title: true, thumbnail: true, duration: true, api_url: true } } },
                    },
                    _count: { select: { episodes: true } },
                },
            });
            if (!series) return errorResponse("Series not found");
            console.log(`✅ [Series] Found: ${series.title}`);
            return successResponse("Series retrieved", series);
        } catch (error) {
            return errorResponse("Failed to fetch series", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Series"], summary: "Get series by ID" } })

    .post("/", async ({ body }) => {
        logRequest("POST", "/series", body);
        try {
            const { title, description, thumbnail, start_year, end_year } = body;
            if (!title?.trim()) return errorResponse("Title required");

            logDbOperation("CREATE", "Series", `Creating: ${title}`);
            const series = await prisma.series.create({
                data: { title: title.trim(), description: description?.trim(), thumbnail, start_year, end_year },
            });
            console.log(`✅ [Series] Created: ${series.title} (ID: ${series.id})`);
            return successResponse("Series created", series);
        } catch (error) {
            return errorResponse("Failed to create series", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            title: t.String(), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            start_year: t.Optional(t.Number()), end_year: t.Optional(t.Number()),
        }),
        detail: { tags: ["Series"], summary: "Create series" },
    })

    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/series/${params.id}`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.series.findUnique({ where: { id } });
            if (!existing) return errorResponse("Series not found");
            const { title, description, thumbnail, start_year, end_year } = body;
            const series = await prisma.series.update({
                where: { id },
                data: {
                    ...(title && { title: title.trim() }), ...(description !== undefined && { description: description?.trim() }),
                    ...(thumbnail !== undefined && { thumbnail }), ...(start_year !== undefined && { start_year }),
                    ...(end_year !== undefined && { end_year }),
                },
            });
            console.log(`✅ [Series] Updated: ${series.title}`);
            return successResponse("Series updated", series);
        } catch (error) {
            return errorResponse("Failed to update series", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            title: t.Optional(t.String()), description: t.Optional(t.String()), thumbnail: t.Optional(t.String()),
            start_year: t.Optional(t.Number()), end_year: t.Optional(t.Number()),
        }),
        detail: { tags: ["Series"], summary: "Update series" },
    })

    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/series/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.series.findUnique({ where: { id } });
            if (!existing) return errorResponse("Series not found");
            await prisma.series.delete({ where: { id } });
            console.log(`✅ [Series] Deleted: ${existing.title}`);
            return successResponse("Series deleted", { id, title: existing.title });
        } catch (error) {
            return errorResponse("Failed to delete series", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Series"], summary: "Delete series" } })

    .get("/:id/episodes", async ({ params, query }) => {
        logRequest("GET", `/series/${params.id}/episodes`, query);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const series = await prisma.series.findUnique({ where: { id } });
            if (!series) return errorResponse("Series not found");

            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });
            const where: any = { series_id: id };
            if (query.season) where.season_number = Number(query.season);

            const totalItems = await prisma.episode.count({ where });
            const episodes = await prisma.episode.findMany({
                where, skip, take,
                orderBy: [{ season_number: "asc" }, { episode_number: "asc" }],
                include: { video: { select: { id: true, title: true, thumbnail: true, duration: true, api_url: true } } },
            });
            console.log(`✅ [Series] Found ${episodes.length} episodes for: ${series.title}`);
            return successResponse(`Episodes for ${series.title}`, episodes, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Failed to fetch episodes", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        query: t.Object({ page: t.Optional(t.String()), limit: t.Optional(t.String()), season: t.Optional(t.String()) }),
        detail: { tags: ["Series"], summary: "Get episodes in series" },
    });
