/**
 * Playlist Service
 * =================
 * CRUD operations untuk Playlist entity.
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import {
    logRequest, logDbOperation, successResponse, errorResponse,
    parsePagination, createPaginationMeta, parseId,
} from "../utils/helpers";

export const playlistService = new Elysia({ prefix: "/playlists" })
    .get("/", async ({ query }) => {
        logRequest("GET", "/playlists", query);
        try {
            const { skip, take, page, limit } = parsePagination({
                page: Number(query.page), limit: Number(query.limit),
            });
            const where: any = {};
            if (query.userId) where.userId = Number(query.userId);
            if (query.public === "true") where.isPublic = true;

            const totalItems = await prisma.playlist.count({ where });
            const playlists = await prisma.playlist.findMany({
                where, skip, take,
                orderBy: { createdAt: "desc" },
                include: { _count: { select: { music: true } } },
            });
            return successResponse("Playlists retrieved", playlists, createPaginationMeta(totalItems, page, limit));
        } catch (error) {
            return errorResponse("Failed to fetch playlists", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        query: t.Object({
            page: t.Optional(t.String()), limit: t.Optional(t.String()),
            userId: t.Optional(t.String()), public: t.Optional(t.String()),
        }),
        detail: { tags: ["Playlists"], summary: "Get all playlists" },
    })

    .get("/:id", async ({ params }) => {
        logRequest("GET", `/playlists/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const playlist = await prisma.playlist.findUnique({
                where: { id },
                include: {
                    music: {
                        orderBy: { sortOrder: "asc" },
                        include: {
                            music: { include: { artist: { select: { id: true, name: true } }, album: { select: { id: true, title: true, coverImage: true } } } },
                        },
                    },
                },
            });
            if (!playlist) return errorResponse("Playlist not found");
            return successResponse("Playlist retrieved", playlist);
        } catch (error) {
            return errorResponse("Failed to fetch playlist", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Playlists"], summary: "Get playlist by ID" } })

    .post("/", async ({ body }) => {
        logRequest("POST", "/playlists", body);
        try {
            const { title, description, userId, isPublic, coverImage } = body;
            if (!title?.trim()) return errorResponse("Title required");
            const playlist = await prisma.playlist.create({
                data: { title: title.trim(), description: description?.trim(), userId, isPublic: isPublic ?? false, coverImage },
            });
            console.log(`✅ [Playlist] Created: ${playlist.title} (ID: ${playlist.id})`);
            return successResponse("Playlist created", playlist);
        } catch (error) {
            return errorResponse("Failed to create playlist", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        body: t.Object({
            title: t.String(), description: t.Optional(t.String()),
            userId: t.Optional(t.Number()), isPublic: t.Optional(t.Boolean()), coverImage: t.Optional(t.String()),
        }),
        detail: { tags: ["Playlists"], summary: "Create playlist" },
    })

    .put("/:id", async ({ params, body }) => {
        logRequest("PUT", `/playlists/${params.id}`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.playlist.findUnique({ where: { id } });
            if (!existing) return errorResponse("Playlist not found");
            const { title, description, isPublic, coverImage } = body;
            const playlist = await prisma.playlist.update({
                where: { id },
                data: {
                    ...(title && { title: title.trim() }), ...(description !== undefined && { description: description?.trim() }),
                    ...(isPublic !== undefined && { isPublic }), ...(coverImage !== undefined && { coverImage }),
                },
            });
            return successResponse("Playlist updated", playlist);
        } catch (error) {
            return errorResponse("Failed to update playlist", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({
            title: t.Optional(t.String()), description: t.Optional(t.String()),
            isPublic: t.Optional(t.Boolean()), coverImage: t.Optional(t.String()),
        }),
        detail: { tags: ["Playlists"], summary: "Update playlist" },
    })

    .delete("/:id", async ({ params }) => {
        logRequest("DELETE", `/playlists/${params.id}`);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const existing = await prisma.playlist.findUnique({ where: { id } });
            if (!existing) return errorResponse("Playlist not found");
            await prisma.playlist.delete({ where: { id } });
            return successResponse("Playlist deleted", { id, title: existing.title });
        } catch (error) {
            return errorResponse("Failed to delete playlist", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String() }), detail: { tags: ["Playlists"], summary: "Delete playlist" } })

    .post("/:id/music", async ({ params, body }) => {
        logRequest("POST", `/playlists/${params.id}/music`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid playlist ID");
        try {
            const playlist = await prisma.playlist.findUnique({ where: { id } });
            if (!playlist) return errorResponse("Playlist not found");
            const { musicId, sortOrder } = body;
            const music = await prisma.music.findUnique({ where: { id: musicId } });
            if (!music) return errorResponse("Music not found");
            const maxOrder = await prisma.playlistMusic.aggregate({ where: { playlistId: id }, _max: { sortOrder: true } });
            const newOrder = sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1;
            const added = await prisma.playlistMusic.create({
                data: { playlistId: id, musicId, sortOrder: newOrder },
                include: { music: true },
            });
            return successResponse("Music added to playlist", added);
        } catch (error: any) {
            if (error.code === "P2002") return errorResponse("Music already in playlist");
            return errorResponse("Failed to add music", error.message);
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({ musicId: t.Number(), sortOrder: t.Optional(t.Number()) }),
        detail: { tags: ["Playlists"], summary: "Add music to playlist" },
    })

    .delete("/:id/music/:musicId", async ({ params }) => {
        logRequest("DELETE", `/playlists/${params.id}/music/${params.musicId}`);
        const playlistId = parseId(params.id);
        const musicId = parseId(params.musicId);
        if (!playlistId || !musicId) return errorResponse("Invalid IDs");
        try {
            const entry = await prisma.playlistMusic.findUnique({ where: { playlistId_musicId: { playlistId, musicId } } });
            if (!entry) return errorResponse("Music not in playlist");
            await prisma.playlistMusic.delete({ where: { id: entry.id } });
            return successResponse("Music removed from playlist", { playlistId, musicId });
        } catch (error) {
            return errorResponse("Failed to remove music", error instanceof Error ? error.message : "Unknown");
        }
    }, { params: t.Object({ id: t.String(), musicId: t.String() }), detail: { tags: ["Playlists"], summary: "Remove music from playlist" } })

    .put("/:id/reorder", async ({ params, body }) => {
        logRequest("PUT", `/playlists/${params.id}/reorder`, body);
        const id = parseId(params.id);
        if (!id) return errorResponse("Invalid ID");
        try {
            const playlist = await prisma.playlist.findUnique({ where: { id } });
            if (!playlist) return errorResponse("Playlist not found");
            const { musicIds } = body;
            await Promise.all(
                musicIds.map((musicId: number, index: number) =>
                    prisma.playlistMusic.updateMany({ where: { playlistId: id, musicId }, data: { sortOrder: index } })
                )
            );
            return successResponse("Playlist reordered", { playlistId: id, newOrder: musicIds });
        } catch (error) {
            return errorResponse("Failed to reorder", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        body: t.Object({ musicIds: t.Array(t.Number()) }),
        detail: { tags: ["Playlists"], summary: "Reorder playlist" },
    });
