/**
 * Music Stream Service
 * =====================
 * Streaming music dengan chunk-based approach dan caching.
 * 
 * Fitur:
 * - Stream music by ID (dari database)
 * - Stream music dari URL langsung
 * - Chunk-based streaming untuk efisiensi
 * - In-memory cache untuk chunks yang sering diakses
 * - Range headers support untuk seeking
 */

import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import { logRequest, logDbOperation, errorResponse, parseId, successResponse } from "../utils/helpers";
import axios from "axios";

// =====================
// CHUNK CACHE CONFIGURATION
// =====================

const CHUNK_SIZE = 256 * 1024; // 256KB per chunk
const MAX_CACHE_SIZE = 100; // Maximum chunks to cache
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes TTL

interface CachedChunk {
    data: Buffer;
    contentType: string;
    timestamp: number;
    totalSize: number;
}

// Simple LRU-like cache for chunks
const chunkCache = new Map<string, CachedChunk>();

/**
 * Generate cache key for a chunk
 */
function getCacheKey(url: string, start: number, end: number): string {
    return `${url}:${start}-${end}`;
}

/**
 * Clean expired cache entries
 */
function cleanExpiredCache(): void {
    const now = Date.now();
    for (const [key, value] of chunkCache.entries()) {
        if (now - value.timestamp > CACHE_TTL) {
            chunkCache.delete(key);
            console.log(`🗑️ [Cache] Expired chunk removed: ${key}`);
        }
    }
}

/**
 * Add chunk to cache with LRU eviction
 */
function addToCache(key: string, chunk: CachedChunk): void {
    // Clean expired entries first
    cleanExpiredCache();

    // Evict oldest if cache is full
    if (chunkCache.size >= MAX_CACHE_SIZE) {
        const oldestKey = chunkCache.keys().next().value as string | undefined;
        if (oldestKey) {
            chunkCache.delete(oldestKey);
            console.log(`🗑️ [Cache] LRU eviction: ${oldestKey}`);
        }
    }

    chunkCache.set(key, chunk);
    console.log(`💾 [Cache] Chunk cached: ${key} (cache size: ${chunkCache.size})`);
}

/**
 * Get chunk from cache
 */
function getFromCache(key: string): CachedChunk | null {
    const chunk = chunkCache.get(key);
    if (!chunk) return null;

    // Check if expired
    if (Date.now() - chunk.timestamp > CACHE_TTL) {
        chunkCache.delete(key);
        return null;
    }

    // Move to end (LRU)
    chunkCache.delete(key);
    chunkCache.set(key, chunk);

    console.log(`✅ [Cache] Hit: ${key}`);
    return chunk;
}

/**
 * Fetch chunk from URL with range
 */
async function fetchChunk(url: string, start: number, end: number): Promise<{
    data: Buffer;
    contentType: string;
    totalSize: number;
    contentRange: string | null;
}> {
    const response = await axios({
        method: "GET",
        url,
        headers: {
            Range: `bytes=${start}-${end}`,
        },
        responseType: "arraybuffer",
        timeout: 30000,
    });

    const contentRange = response.headers["content-range"] as string | undefined;
    let totalSize = end - start + 1;

    if (contentRange) {
        // Parse total size from content-range: bytes 0-1023/12345
        const match = contentRange.match(/\/(\d+)/);
        if (match && match[1]) {
            totalSize = parseInt(match[1], 10);
        }
    }

    return {
        data: Buffer.from(response.data),
        contentType: response.headers["content-type"] || "audio/mpeg",
        totalSize,
        contentRange: contentRange || null,
    };
}

/**
 * Get file size from URL using HEAD request
 */
async function getFileSize(url: string): Promise<number> {
    try {
        const response = await axios.head(url, { timeout: 10000 });
        const contentLength = response.headers["content-length"];
        return contentLength ? parseInt(contentLength, 10) : 0;
    } catch {
        return 0;
    }
}

export const musicStreamService = new Elysia({ prefix: "/stream" })
    // =====================
    // STREAM MUSIC BY ID
    // =====================
    .get("/music/:id", async ({ params, request, set }) => {
        logRequest("GET", `/stream/music/${params.id}`);
        const id = parseId(params.id);
        if (!id) {
            set.status = 400;
            return errorResponse("Invalid music ID");
        }

        try {
            logDbOperation("READ", "Music", `Fetching music for streaming: ${id}`);

            const music = await prisma.music.findUnique({
                where: { id },
                select: { id: true, title: true, apiUrl: true },
            });

            if (!music) {
                set.status = 404;
                return errorResponse("Music not found");
            }

            if (!music.apiUrl) {
                set.status = 400;
                return errorResponse("Music URL not available");
            }

            console.log(`🎵 [Stream] Streaming music: ${music.title} (ID: ${id})`);

            // Redirect to URL streaming endpoint
            const rangeHeader = request.headers.get("range");
            return streamFromUrl(music.apiUrl, rangeHeader, set);

        } catch (error) {
            console.error(`❌ [Stream] Error:`, error);
            set.status = 500;
            return errorResponse("Streaming failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        detail: {
            tags: ["Music Streaming"],
            summary: "Stream music by ID",
            description: "Stream music file with chunk caching and Range support",
        },
    })

    // =====================
    // STREAM MUSIC FROM URL
    // =====================
    .get("/music/url", async ({ query, request, set }) => {
        logRequest("GET", "/stream/music/url", query);

        const url = query.url;
        if (!url) {
            set.status = 400;
            return errorResponse("URL parameter required");
        }

        const rangeHeader = request.headers.get("range");
        return streamFromUrl(url, rangeHeader, set);
    }, {
        query: t.Object({ url: t.String() }),
        detail: {
            tags: ["Music Streaming"],
            summary: "Stream music from URL",
            description: "Stream music from a direct URL with chunk caching",
        },
    })

    // =====================
    // GET CACHE STATS
    // =====================
    .get("/cache/stats", async () => {
        cleanExpiredCache();

        let totalCacheSize = 0;
        for (const chunk of chunkCache.values()) {
            totalCacheSize += chunk.data.length;
        }

        return successResponse("Cache statistics", {
            chunksCount: chunkCache.size,
            maxChunks: MAX_CACHE_SIZE,
            chunkSize: CHUNK_SIZE,
            totalCacheSizeBytes: totalCacheSize,
            totalCacheSizeMB: (totalCacheSize / 1024 / 1024).toFixed(2),
            cacheTTLSeconds: CACHE_TTL / 1000,
        });
    }, {
        detail: {
            tags: ["Music Streaming"],
            summary: "Get cache statistics",
            description: "Get current chunk cache statistics",
        },
    })

    // =====================
    // CLEAR CACHE
    // =====================
    .delete("/cache/clear", async () => {
        const count = chunkCache.size;
        chunkCache.clear();
        console.log(`🗑️ [Cache] Cleared all ${count} chunks`);
        return successResponse("Cache cleared", { clearedChunks: count });
    }, {
        detail: {
            tags: ["Music Streaming"],
            summary: "Clear cache",
            description: "Clear all cached chunks",
        },
    });

/**
 * Stream from URL with chunk caching
 */
async function streamFromUrl(url: string, rangeHeader: string | null, set: any): Promise<any> {
    try {
        console.log(`🔗 [Stream] URL: ${url}`);
        console.log(`📊 [Stream] Range: ${rangeHeader || "none"}`);

        // Get file size first
        const fileSize = await getFileSize(url);
        console.log(`📁 [Stream] File size: ${fileSize} bytes`);

        let start = 0;
        let end = fileSize > 0 ? fileSize - 1 : CHUNK_SIZE - 1;

        // Parse range header
        if (rangeHeader) {
            const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
            if (match && match[1]) {
                start = parseInt(match[1], 10);
                end = match[2] ? parseInt(match[2], 10) : start + CHUNK_SIZE - 1;

                // Limit chunk size
                if (end - start + 1 > CHUNK_SIZE) {
                    end = start + CHUNK_SIZE - 1;
                }

                // Don't exceed file size
                if (fileSize > 0 && end >= fileSize) {
                    end = fileSize - 1;
                }
            }
        } else {
            // No range, send first chunk
            end = Math.min(CHUNK_SIZE - 1, fileSize > 0 ? fileSize - 1 : CHUNK_SIZE - 1);
        }

        // Check cache first
        const cacheKey = getCacheKey(url, start, end);
        const cachedChunk = getFromCache(cacheKey);

        let chunkData: Buffer;
        let contentType: string;
        let totalSize: number;

        if (cachedChunk) {
            // Use cached chunk
            chunkData = cachedChunk.data;
            contentType = cachedChunk.contentType;
            totalSize = cachedChunk.totalSize;
            console.log(`⚡ [Stream] Serving from cache`);
        } else {
            // Fetch chunk from source
            console.log(`📥 [Stream] Fetching chunk: ${start}-${end}`);
            const result = await fetchChunk(url, start, end);
            chunkData = result.data;
            contentType = result.contentType;
            totalSize = fileSize > 0 ? fileSize : result.totalSize;

            // Cache the chunk
            addToCache(cacheKey, {
                data: chunkData,
                contentType,
                totalSize,
                timestamp: Date.now(),
            });
        }

        // Set response headers
        const actualEnd = start + chunkData.length - 1;

        set.headers = {
            "Content-Type": contentType,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkData.length.toString(),
            "Content-Range": `bytes ${start}-${actualEnd}/${totalSize}`,
            "Cache-Control": "public, max-age=3600",
        };

        if (rangeHeader) {
            set.status = 206; // Partial Content
        } else {
            set.status = 200;
        }

        console.log(`✅ [Stream] Serving chunk ${start}-${actualEnd}/${totalSize} (${chunkData.length} bytes)`);

        return chunkData;

    } catch (error: any) {
        console.error(`❌ [Stream] Error:`, error);
        set.status = 502;
        return errorResponse("Failed to stream music", error.message);
    }
}
