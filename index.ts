/**
 * Audio & Video Backend API
 * ==========================
 * Entry point utama untuk API streaming audio dan video.
 * 
 * Features:
 * - CRUD operations untuk Artist, Album, Music, Playlist
 * - CRUD operations untuk Video, Movie, Series, Episode
 * - User management dengan Google OAuth2 SSO
 * - Favorites dan History tracking
 * - Video streaming dengan Range support
 * - Image upload/management
 * - Swagger API documentation
 */

import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { ensureDirectoryExists, STORAGE_PATH } from "./utils/helpers";

// Import all services - Music Domain
import { artistService } from "./services/artist.service";
import { albumService } from "./services/album.service";
import { musicService } from "./services/music.service";
import { playlistService } from "./services/playlist.service";

// Import all services - Video Domain
import { videoService } from "./services/video.service";
import { movieService } from "./services/movie.service";
import { seriesService } from "./services/series.service";
import { episodeService } from "./services/episode.service";
import { videoStreamService } from "./services/video-stream.service";
import { musicStreamService } from "./services/music-stream.service";
import { searchService } from "./services/search.service";

// Import all services - Assets
import { imageService } from "./services/image.service";

// Import all services - User & Interactions
import { userService, authService } from "./services/user.service";
import { favoriteService } from "./services/favorite.service";
import { historyService } from "./services/history.service";

// Inisialisasi direktori
const publicDir = "public";
await ensureDirectoryExists(publicDir);
await ensureDirectoryExists("public/images");
await ensureDirectoryExists("storage");

console.log("🚀 Starting Audio & Video Backend API...");
console.log(`📁 Storage path: ${STORAGE_PATH}`);

const app = new Elysia()
  // Apply CORS middleware first
  .use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Accept",
        "Authorization",
        "X-Requested-With",
        "Range",
      ],
      exposeHeaders: [
        "Content-Length",
        "Date",
        "X-Rate-Limit",
        "Content-Range",
        "Accept-Ranges",
      ],
      credentials: true,
      preflight: true,
      maxAge: 86400,
    })
  )
  // Swagger documentation
  .use(
    swagger({
      documentation: {
        info: {
          title: "Audio & Video Streaming API",
          version: "2.0.0",
          description: "Comprehensive API untuk streaming audio dan video dengan user authentication, favorites, dan history tracking.",
        },
        tags: [
          { name: "Artists", description: "Artist management endpoints" },
          { name: "Albums", description: "Album management endpoints" },
          { name: "Music", description: "Music management endpoints" },
          { name: "Playlists", description: "Playlist management endpoints" },
          { name: "Videos", description: "Video management endpoints" },
          { name: "Movies", description: "Movie management endpoints" },
          { name: "Series", description: "Series management endpoints" },
          { name: "Episodes", description: "Episode management endpoints" },
          { name: "Streaming", description: "Video streaming endpoints" },
          { name: "Music Streaming", description: "Music streaming with chunk caching" },
          { name: "Search", description: "Unified search for music and video" },
          { name: "Images", description: "Image upload/get endpoints" },
          { name: "Users", description: "User management endpoints" },
          { name: "Auth", description: "Authentication endpoints (Google OAuth2)" },
          { name: "Favorites", description: "Favorites management endpoints" },
          { name: "History", description: "Playback history endpoints" },
        ],
      },
    })
  )
  // Static file serving
  .use(
    staticPlugin({
      prefix: "/static",
      assets: "public",
    })
  )
  .use(
    staticPlugin({
      prefix: "/storage",
      assets: STORAGE_PATH,
      alwaysStatic: true,
    })
  )
  // Rate limiting
  .use(
    rateLimit({
      max: 100,
      duration: 15 * 60 * 1000,
    })
  )
  // Global error handler
  .onError(({ code, error, set }) => {
    console.error(`❌ [Error] Code: ${code}`, error);

    if (code === "NOT_FOUND") {
      set.status = 404;
      return {
        success: false,
        message: "Endpoint tidak ditemukan",
        error: "NOT_FOUND",
      };
    }

    if (code === "VALIDATION") {
      set.status = 400;
      const message = (error as any).message || "Validasi gagal";
      return {
        success: false,
        message: "Data input tidak valid",
        error: message,
      };
    }

    // Default server error
    set.status = 500;

    let errorMessage: string;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null && "message" in error) {
      errorMessage = (error as any).message;
    } else {
      errorMessage = JSON.stringify(error) || "Terjadi kesalahan pada server";
    }

    return {
      success: false,
      message: "Server error",
      error: errorMessage,
    };
  })
  // Health check endpoint
  .get("/", () => ({
    success: true,
    message: "Audio & Video Backend API",
    version: "2.0.0",
    documentation: "/swagger",
    endpoints: {
      music: "/artists, /albums, /music, /playlists",
      video: "/videos, /movies, /series, /episodes, /stream",
      user: "/users, /auth, /favorites, /history",
      assets: "/images, /static, /storage",
    },
  }))
  .get("/health", () => ({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
  }))

  // Use all services - Music Domain
  .use(artistService)
  .use(albumService)
  .use(musicService)
  .use(playlistService)

  // Use all services - Video Domain
  .use(videoService)
  .use(movieService)
  .use(seriesService)
  .use(episodeService)
  .use(videoStreamService)
  .use(musicStreamService)
  .use(searchService)

  // Use all services - Assets
  .use(imageService)

  // Use all services - User & Interactions
  .use(userService)
  .use(authService)
  .use(favoriteService)
  .use(historyService)

  .listen(3755);

console.log(`\n🎵 Server berjalan di http://${app.server?.hostname}:${app.server?.port}`);
console.log(`📚 Swagger docs: http://${app.server?.hostname}:${app.server?.port}/swagger`);

console.log("\n📚 Available API Endpoints:");
console.log("═══════════════════════════════════════════════════════════════");
console.log(`${"METHOD".padEnd(8)} | ${"PATH".padEnd(45)} | ${"PARAMS"}`);
console.log("═══════════════════════════════════════════════════════════════");

app.routes.forEach((route) => {
  const method = route.method.padEnd(8);
  const path = route.path.padEnd(45);

  // Extract path parameters
  const pathParams = route.path.match(/:[a-zA-Z0-9_]+/g) || [];

  // Try to extract query parameters
  let queryParams: string[] = [];
  // @ts-ignore
  if (route.hooks?.schema?.query) {
    try {
      // @ts-ignore
      const queryKeys = Object.keys(route.hooks.schema.query.properties || {});
      if (queryKeys.length > 0) {
        queryParams = queryKeys.map(k => `?${k}`);
      }
    } catch (e) {
      // Ignore
    }
  }

  const paramsDisplay = [...pathParams, ...queryParams].join(", ") || "-";

  console.log(`${method} | ${path} | ${paramsDisplay}`);
});
console.log("═══════════════════════════════════════════════════════════════");
console.log(`\n✅ Total ${app.routes.length} endpoints registered`);
