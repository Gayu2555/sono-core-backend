
import { Elysia, t } from "elysia";
import prisma from "../utils/prisma";
import { logRequest, logDbOperation, errorResponse, parseId } from "../utils/helpers";
import axios from "axios";

export const videoStreamService = new Elysia({ prefix: "/stream" })
    .get("/video/:id", async ({ params, request, set }) => {
        logRequest("GET", `/stream/video/${params.id}`);
        const id = parseId(params.id);
        if (!id) {
            set.status = 400;
            return errorResponse("Invalid video ID");
        }

        try {
            logDbOperation("READ", "Video", `Fetching video for streaming: ${id}`);

            const video = await prisma.video.findUnique({
                where: { id },
                select: { id: true, title: true, api_url: true },
            });

            if (!video) {
                set.status = 404;
                return errorResponse("Video not found");
            }

            if (!video.api_url) {
                set.status = 400;
                return errorResponse("Video URL not available");
            }

            console.log(`🎬 [Stream] Streaming video: ${video.title} (ID: ${id})`);
            console.log(`🔗 [Stream] Source URL: ${video.api_url}`);

            // Get range header for partial content
            const range = request.headers.get("range");
            console.log(`📊 [Stream] Range header: ${range || "none"}`);

            // Fetch video from source URL
            const headers: Record<string, string> = {};
            if (range) {
                headers["Range"] = range;
            }

            try {
                const response = await axios({
                    method: "GET",
                    url: video.api_url,
                    headers,
                    responseType: "stream",
                    timeout: 30000,
                });

                // Set response headers
                set.headers = {
                    "Content-Type": response.headers["content-type"] || "video/mp4",
                    "Accept-Ranges": "bytes",
                };

                if (response.headers["content-length"]) {
                    set.headers["Content-Length"] = response.headers["content-length"];
                }

                if (response.headers["content-range"]) {
                    set.headers["Content-Range"] = response.headers["content-range"];
                    set.status = 206; // Partial Content
                } else {
                    set.status = 200;
                }

                console.log(`✅ [Stream] Streaming started for: ${video.title}`);

                return response.data;
            } catch (axiosError: any) {
                console.error(`❌ [Stream] Error fetching from source: ${axiosError.message}`);
                set.status = 502;
                return errorResponse("Failed to fetch video from source", axiosError.message);
            }
        } catch (error) {
            console.error(`❌ [Stream] Error:`, error);
            set.status = 500;
            return errorResponse("Streaming failed", error instanceof Error ? error.message : "Unknown");
        }
    }, {
        params: t.Object({ id: t.String() }),
        detail: {
            tags: ["Streaming"],
            summary: "Stream video",
            description: "Stream video with Range support for seeking",
        },
    })

    // Direct URL streaming (for custom URLs)
    .get("/url", async ({ query, request, set }) => {
        logRequest("GET", "/stream/url", query);

        const url = query.url;
        if (!url) {
            set.status = 400;
            return errorResponse("URL parameter required");
        }

        try {
            console.log(`🔗 [Stream] Direct URL streaming: ${url}`);

            const range = request.headers.get("range");
            const headers: Record<string, string> = {};
            if (range) {
                headers["Range"] = range;
            }

            const response = await axios({
                method: "GET",
                url,
                headers,
                responseType: "stream",
                timeout: 30000,
            });

            set.headers = {
                "Content-Type": response.headers["content-type"] || "video/mp4",
                "Accept-Ranges": "bytes",
            };

            if (response.headers["content-length"]) {
                set.headers["Content-Length"] = response.headers["content-length"];
            }

            if (response.headers["content-range"]) {
                set.headers["Content-Range"] = response.headers["content-range"];
                set.status = 206;
            } else {
                set.status = 200;
            }

            console.log(`✅ [Stream] Direct URL streaming started`);

            return response.data;
        } catch (error: any) {
            console.error(`❌ [Stream] Direct URL error:`, error);
            set.status = 502;
            return errorResponse("Failed to stream from URL", error.message);
        }
    }, {
        query: t.Object({ url: t.String() }),
        detail: {
            tags: ["Streaming"],
            summary: "Stream from URL",
            description: "Stream video from a direct URL",
        },
    });
