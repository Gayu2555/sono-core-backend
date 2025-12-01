import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { PrismaClient, VideoType } from "@prisma/client";
import pDebounce from "p-debounce";
import { readFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync, readFileSync, lstatSync, readdirSync } from "fs";
import path from "path";
import axios from "axios";
import { Readable } from "stream";
import { pipeline } from "stream/promises";

// Pastikan direktori public ada sebelum memulai server
async function ensureDirectoryExists(dirPath: string) {
  if (!existsSync(dirPath)) {
    try {
      await mkdir(dirPath, { recursive: true });
      console.log(`Direktori dibuat: ${dirPath}`);
    } catch (error) {
      console.error(`Gagal membuat direktori ${dirPath}:`, error);
    }
  }
}

// Inisialisasi direktori public
const publicDir = "public";
await ensureDirectoryExists(publicDir);

const prisma = new PrismaClient();

const STORAGE_PATH =
  "D:\\Trae\\DashboardAdmin\\AdminDashboard\\storage\\app\\public";

const fileExists = (filePath: string): boolean => {
  try {
    return existsSync(filePath);
  } catch (error: any) {
    console.error(`Error checking file: ${filePath} - ${error.message}`);
    return false;
  }
};

const isExternalUrl = (url: string): boolean => {
  return url.startsWith("http://") || url.startsWith("https://");
};

interface VideoAccessDetails {
  videoUrl: string;
  isExternal: boolean;
  title?: string;
}

const getVideoAccessDetails = (
  apiUrlFromDb: string | null | undefined,
  request: Request,
  title?: string | null
): VideoAccessDetails | null => {
  if (!apiUrlFromDb) {
    return null;
  }

  if (isExternalUrl(apiUrlFromDb)) {
    return {
      videoUrl: apiUrlFromDb,
      isExternal: true,
      title: title || "External Video",
    };
  } else {
    const reqUrl = new URL(request.url);
    const protocol = reqUrl.protocol;
    const host = request.headers.get("host") || reqUrl.host;

    const serverBaseUrl = `${protocol}//${host}`;
    const clientPath = `/storage/${apiUrlFromDb.replace(/^\//, "")}`;

    return {
      videoUrl: `${serverBaseUrl}${clientPath}`,
      isExternal: false,
      title: title || "Local Video",
    };
  }
};

// Fungsi debounce untuk pencarian
const debouncedSearch = pDebounce(
  async (query: string, type: "artist" | "album" | "music") => {
    const searchTerm = `%${query}%`;

    switch (type) {
      case "artist":
        return await prisma.artist.findMany({
          where: {
            OR: [{ name: { contains: query } }, { bio: { contains: query } }],
          },
          include: {
            _count: {
              select: {
                albums: true,
                music: true,
              },
            },
          },
        });
      case "album":
        return await prisma.album.findMany({
          where: {
            OR: [
              { title: { contains: query } },
              { description: { contains: query } },
            ],
          },
          include: {
            artist: true,
            _count: {
              select: {
                music: true,
              },
            },
          },
        });
      case "music":
        return await prisma.music.findMany({
          where: {
            OR: [
              { title: { contains: query } },
              { genre: { contains: query } },
            ],
          },
          include: {
            artist: true,
            album: true,
          },
        });
      default:
        return [];
    }
  },
  300
); // 300ms debounce

// Cache untuk menyimpan informasi lagu yang sedang diproses
const musicCache = new Map();

// Fungsi untuk mengambil informasi musik berdasarkan ID
async function getMusicInfo(id: number) {
  // Cek cache terlebih dahulu
  if (musicCache.has(id)) {
    return musicCache.get(id);
  }

  // Jika tidak ada di cache, ambil dari database
  const music = await prisma.music.findUnique({
    where: { id },
    include: {
      artist: true,
      album: true,
    },
  });

  if (music) {
    // Simpan ke cache untuk 5 menit
    musicCache.set(id, music);
    setTimeout(() => {
      musicCache.delete(id);
    }, 5 * 60 * 1000);
  }

  return music;
}

const app = new Elysia()
  // Apply CORS middleware first, with proper configuration
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
  .use(
    swagger({
      documentation: {
        info: {
          title: "Video & Audio API Documentation",
          version: "1.0.0",
          description: "API untuk streaming video dan audio.",
        },
      },
    })
  )
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
  .use(
    rateLimit({
      max: 100,
      duration: 15 * 60 * 1000,
    })
  )
  .onError(({ code, error, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;
      return { error: "Endpoint tidak ditemukan" };
    }

    if (code === "VALIDATION") {
      set.status = 400;
      // ✅ Aman: VALIDATION biasanya punya .message, tapi tetap beri fallback
      const message = (error as any).message || "Validasi gagal";
      return { error: "Data input tidak valid", details: message };
    }

    // Default server error
    set.status = 500;

    // ✅ Cara aman mengambil pesan error
    let errorMessage: string;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null && "message" in error) {
      errorMessage = (error as any).message;
    } else {
      errorMessage = JSON.stringify(error) || "Terjadi kesalahan pada server";
    }

    return { error: errorMessage };
  })

  // Endpoint untuk Artist
  .get("/api/artists", async () => {
    return await prisma.artist.findMany({
      include: {
        _count: {
          select: {
            albums: true,
            music: true,
          },
        },
      },
    });
  })
  .get("/api/artists/search", async ({ query }) => {
    console.log("GET /api/artists/search query:", query);
    const { q } = query as { q?: string };
    if (!q || q.length < 2) return { error: "Query pencarian terlalu pendek" };

    return await debouncedSearch(q as string, "artist");
  })
  .get("/api/artists/:id", async ({ params: { id } }) => {
    console.log("GET /api/artists/:id params:", { id });
    const artistId = parseInt(id);
    if (isNaN(artistId)) return { error: "ID tidak valid" };

    const artist = await prisma.artist.findUnique({
      where: { id: artistId },
      include: {
        albums: true,
        music: {
          include: {
            album: true,
          },
        },
      },
    });

    if (!artist) return { error: "Artist tidak ditemukan" };
    return artist;
  })

  // Endpoint untuk mengambil album berdasarkan artis
  .get("/api/artists/:id/albums", async ({ params: { id } }) => {
    console.log("GET /api/artists/:id/albums params:", { id });
    const artistId = parseInt(id);
    if (isNaN(artistId)) return { error: "ID artis tidak valid" };

    // Periksa apakah artist ada
    const artist = await prisma.artist.findUnique({
      where: { id: artistId },
    });

    if (!artist) return { error: "Artist tidak ditemukan" };

    // Ambil semua album dari artis tersebut
    const albums = await prisma.album.findMany({
      where: { artistId },
      include: {
        _count: {
          select: {
            music: true,
          },
        },
      },
      orderBy: { releaseYear: "desc" },
    });

    return {
      artist,
      albumCount: albums.length,
      albums,
    };
  })

  // Endpoint untuk mengambil lagu berdasarkan artis dan album
  .get(
    "/api/artists/:id/albums/:albumId/songs",
    async ({ params: { id, albumId } }) => {
      console.log("GET /api/artists/:id/albums/:albumId/songs params:", { id, albumId });
      const artistId = parseInt(id);
      const parsedAlbumId = parseInt(albumId);

      if (isNaN(artistId) || isNaN(parsedAlbumId)) {
        return { error: "ID artis atau ID album tidak valid" };
      }

      // Periksa apakah artist ada
      const artist = await prisma.artist.findUnique({
        where: { id: artistId },
      });

      if (!artist) return { error: "Artist tidak ditemukan" };

      // Periksa apakah album ada dan milik artis tersebut
      const album = await prisma.album.findFirst({
        where: {
          id: parsedAlbumId,
          artistId: artistId,
        },
      });

      if (!album)
        return { error: "Album tidak ditemukan atau bukan milik artis ini" };

      // Ambil semua lagu dari album tersebut
      const songs = await prisma.music.findMany({
        where: {
          artistId: artistId,
          albumId: parsedAlbumId,
        },
        orderBy: {
          title: "asc",
        },
      });

      return {
        artist,
        album,
        songCount: songs.length,
        songs,
      };
    }
  )

  // Endpoint untuk mengambil semua lagu dari artis tertentu
  .get("/api/artists/:id/songs", async ({ params: { id } }) => {
    console.log("GET /api/artists/:id/songs params:", { id });
    const artistId = parseInt(id);
    if (isNaN(artistId)) return { error: "ID artis tidak valid" };

    // Periksa apakah artist ada
    const artist = await prisma.artist.findUnique({
      where: { id: artistId },
    });

    if (!artist) return { error: "Artist tidak ditemukan" };

    // Ambil semua lagu dari artis tersebut
    const songs = await prisma.music.findMany({
      where: { artistId },
      include: {
        album: true,
      },
      orderBy: {
        album: { releaseYear: "desc" },
      },
    });

    return {
      artist,
      songCount: songs.length,
      songs,
    };
  })

  // Endpoint untuk Album
  .get("/api/albums", async () => {
    return await prisma.album.findMany({
      include: {
        artist: true,
        _count: {
          select: {
            music: true,
          },
        },
      },
    });
  })
  .get("/api/albums/search", async ({ query }) => {
    console.log("GET /api/albums/search query:", query);
    const { q } = query as { q?: string };
    if (!q || q.length < 2) return { error: "Query pencarian terlalu pendek" };

    return await debouncedSearch(q as string, "album");
  })
  .get("/api/albums/:id", async ({ params: { id } }) => {
    console.log("GET /api/albums/:id params:", { id });
    const albumId = parseInt(id);
    if (isNaN(albumId)) return { error: "ID tidak valid" };

    const album = await prisma.album.findUnique({
      where: { id: albumId },
      include: {
        artist: true,
        music: true,
      },
    });

    if (!album) return { error: "Album tidak ditemukan" };
    return album;
  })

  // Endpoint untuk Music
  .get("/api/music", async () => {
    return await prisma.music.findMany({
      include: {
        artist: true,
        album: true,
      },
    });
  })
  .get("/api/music/search", async ({ query }) => {
    console.log("GET /api/music/search query:", query);
    const { q } = query as { q?: string };
    if (!q || q.length < 2) return { error: "Query pencarian terlalu pendek" };

    return await debouncedSearch(q as string, "music");
  })
  .get("/api/music/:id", async ({ params: { id } }) => {
    console.log("GET /api/music/:id params:", { id });
    const musicId = parseInt(id);
    if (isNaN(musicId)) return { error: "ID tidak valid" };

    const music = await prisma.music.findUnique({
      where: { id: musicId },
      include: {
        artist: true,
        album: true,
      },
    });

    if (!music) return { error: "Musik tidak ditemukan" };
    return music;
  })

  // ENDPOINT STREAMING MUSIK BARU
  .get("/api/stream/:id", async ({ params: { id }, request, set }) => {
    console.log("GET /api/stream/:id params:", { id });
    try {
      const musicId = parseInt(id);
      if (isNaN(musicId)) {
        set.status = 400;
        return { error: "ID musik tidak valid" };
      }

      // Dapatkan informasi musik dari database
      const musicInfo = await getMusicInfo(musicId);
      if (!musicInfo || !musicInfo.apiUrl) {
        set.status = 404;
        return { error: "Musik tidak ditemukan atau tidak memiliki URL audio" };
      }

      // Persiapkan request untuk stream
      const headers: Record<string, string> = {};

      // Penanganan Range header untuk pemutaran streaming
      const range = request.headers.get("Range");
      if (range) {
        headers["Range"] = range;
      }
      // Buat request ke URL eksternal
      const response = await axios({
        method: "GET",
        url: musicInfo.apiUrl,
        responseType: "stream",
        headers: headers,
      });

      // Set header untuk respons streaming
      set.headers["Content-Type"] =
        response.headers["content-type"] || "audio/mpeg";

      // Tambahkan header Accept-Ranges untuk mendukung seek
      set.headers["Accept-Ranges"] = "bytes";

      // Jaga-jaga jika ada header Content-Length
      if (response.headers["content-length"]) {
        set.headers["Content-Length"] = response.headers["content-length"];
      }

      // Jika ini adalah permintaan Range, perlu mengembalikan status 206
      if (response.status === 206) {
        set.status = 206;
        // Forward header Content-Range jika ada
        if (response.headers["content-range"]) {
          set.headers["Content-Range"] = response.headers["content-range"];
        }
      }

      // Catat pendengar musik (opsional)
      await prisma.musicPlay
        .create({
          data: {
            musicId: musicId,
            playedAt: new Date(),
            // IP atau user ID bisa ditambahkan jika diperlukan
          },
        })
        .catch((error) => {
          // Catat error tapi jangan biarkan ini mengganggu streaming musik
          console.error("Gagal mencatat pemutaran musik:", error);
        });

      // Kembalikan stream data audio
      return response.data;
    } catch (error) {
      console.error("Error streaming musik:", error);
      set.status = 500;
      return { error: "Terjadi kesalahan saat streaming musik" };
    }
  })

  // Endpoint untuk statistik pemutaran
  .get("/api/music/:id/stats", async ({ params: { id } }) => {
    console.log("GET /api/music/:id/stats params:", { id });
    const musicId = parseInt(id);
    if (isNaN(musicId)) return { error: "ID tidak valid" };

    // Periksa musik ada atau tidak
    const music = await prisma.music.findUnique({
      where: { id: musicId },
    });

    if (!music) return { error: "Musik tidak ditemukan" };

    // Dapatkan statistik pemutaran
    const totalPlays = await prisma.musicPlay.count({
      where: { musicId },
    });

    // Dapatkan statistik pemutaran per hari selama 7 hari terakhir
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const dailyPlays = await prisma.$queryRaw`
      SELECT 
        DATE(playedAt) as date,
        COUNT(*) as count
      FROM MusicPlay
      WHERE musicId = ${musicId}
      AND playedAt >= ${sevenDaysAgo}
      GROUP BY DATE(playedAt)
      ORDER BY date ASC
    `;

    return {
      musicId,
      title: music.title,
      totalPlays,
      dailyPlays,
    };
  })

  // Endpoint untuk transcoding musik (opsional, untuk pengembangan lebih lanjut)
  .get("/api/transcode/:id", async ({ params: { id }, query, set }) => {
    console.log("GET /api/transcode/:id params:", { id }, "query:", query);
    // Endpoint ini bisa dikembangkan untuk mengubah kualitas atau format audio
    // Misalnya untuk menghasilkan versi low-quality untuk koneksi lambat
    const musicId = parseInt(id);
    if (isNaN(musicId)) {
      set.status = 400;
      return { error: "ID musik tidak valid" };
    }

    const { quality } = query as { quality?: string };
    const validQualities = ["low", "medium", "high"];

    if (quality && !validQualities.includes(quality)) {
      set.status = 400;
      return {
        error: "Kualitas audio tidak valid. Pilihan: low, medium, high",
      };
    }

    // Ini hanya placeholder, implementasi sebenarnya memerlukan library FFmpeg
    return { message: "Fitur transcoding akan segera tersedia" };
  })

  // Endpoint untuk mengambil gambar album dan artis
  .get(
    "/api/images/:folder/:filename",
    async ({ params: { folder, filename }, set }) => {
      console.log("GET /api/images/:folder/:filename params:", { folder, filename });
      try {
        let storagePath = "";
        let normalizedFolder = folder.toLowerCase().trim();

        if (normalizedFolder.includes("/")) {
          const parts = normalizedFolder.split("/");
          normalizedFolder = parts[parts.length - 1] || "";
        }

        if (["albums", "artists"].includes(normalizedFolder)) {
          const storageDirPath =
            "D:\\Trae\\DashboardAdmin\\AdminDashboard\\storage\\app\\public";
          storagePath = join(storageDirPath, normalizedFolder, filename);
        } else {
          set.status = 400;
          return { error: "Folder tidak valid" };
        }

        if (!existsSync(storagePath)) {
          set.status = 404;
          return { error: "Gambar tidak ditemukan" };
        }

        const imageBuffer = await readFile(storagePath);
        const contentType =
          filename.endsWith(".jpg") || filename.endsWith(".jpeg")
            ? "image/jpeg"
            : filename.endsWith(".png")
              ? "image/png"
              : "application/octet-stream";

        set.headers["Content-Type"] = contentType;
        set.headers["Cache-Control"] = "public, max-age=86400";

        return imageBuffer;
      } catch (error) {
        set.status = 500;
        return { error: "Terjadi kesalahan saat mengambil gambar" };
      }
    }
  )

  // Simple placeholder endpoint
  .get(
    "/api/placeholder/:width/:height",
    ({ params: { width, height }, set }) => {
      console.log("GET /api/placeholder/:width/:height params:", { width, height });
      const w = parseInt(width) || 160;
      const h = parseInt(height) || 160;
      const safeWidth = Math.min(w, 800);
      const safeHeight = Math.min(h, 800);

      const svg = `<svg width="${safeWidth}" height="${safeHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#2d3748"/>
        <text x="50%" y="50%" font-family="Arial" font-size="${Math.max(safeWidth, safeHeight) / 10
        }px" fill="#a0aec0" text-anchor="middle" dominant-baseline="middle">No Image</text>
      </svg>`;

      set.headers["Content-Type"] = "image/svg+xml";
      set.headers["Cache-Control"] = "public, max-age=31536000";
      return svg;
    }
  )
  // === VIDEO ENDPOINTS ===

  .get("/api/stream/video/:id", async ({ params: { id }, request, set }) => {
    console.log("GET /api/stream/video/:id params:", { id });
    try {
      const videoId = parseInt(id, 10);
      if (isNaN(videoId)) {
        set.status = 400;
        return { status: "error", message: "ID Video tidak valid" };
      }

      const video = await prisma.video.findUnique({
        where: { id: videoId },
        select: { api_url: true, title: true },
      });

      if (!video) {
        set.status = 404;
        return { status: "error", message: "Video tidak ditemukan" };
      }

      const accessDetails = getVideoAccessDetails(
        video.api_url,
        request,
        video.title
      );
      if (!accessDetails) {
        set.status = 404;
        return {
          status: "error",
          message: "URL Video tidak dapat dibuat atau path tidak valid",
        };
      }
      set.status = 200;
      return { status: "success", data: accessDetails };
    } catch (error: any) {
      console.error("Error getting video URL info by ID:", error.message);
      set.status = 500;
      return {
        status: "error",
        message: "Gagal mendapatkan informasi URL video",
      };
    }
  })

  .get("/api/stream/movie/:id", async ({ params: { id }, request, set }) => {
    console.log("GET /api/stream/movie/:id params:", { id });
    try {
      const movieId = parseInt(id, 10);
      if (isNaN(movieId)) {
        set.status = 400;
        return { status: "error", message: "ID Movie tidak valid" };
      }

      const movie = await prisma.movie.findUnique({
        where: { id: movieId },
        select: {
          video: {
            select: { api_url: true, title: true },
          },
        },
      });

      if (!movie || !movie.video) {
        set.status = 404;
        return { status: "error", message: "Movie atau video tidak ditemukan" };
      }

      const accessDetails = getVideoAccessDetails(
        movie.video.api_url,
        request,
        movie.video.title
      );
      if (!accessDetails) {
        set.status = 404;
        return {
          status: "error",
          message: "URL Video tidak dapat dibuat atau path tidak valid",
        };
      }
      set.status = 200;
      return { status: "success", data: accessDetails };
    } catch (error: any) {
      console.error("Error getting movie URL info:", error.message);
      set.status = 500;
      return {
        status: "error",
        message: "Gagal mendapatkan informasi URL movie",
      };
    }
  })

  .get("/api/stream/episode/:id", async ({ params: { id }, request, set }) => {
    console.log("GET /api/stream/episode/:id params:", { id });
    try {
      const episodeId = parseInt(id, 10);
      if (isNaN(episodeId)) {
        set.status = 400;
        return { status: "error", message: "ID Episode tidak valid" };
      }

      const episode = await prisma.episode.findUnique({
        where: { id: episodeId },
        select: {
          video: {
            select: { api_url: true, title: true },
          },
          series: {
            select: { title: true },
          },
        },
      });

      if (!episode || !episode.video) {
        set.status = 404;
        return {
          status: "error",
          message: "Episode atau video tidak ditemukan",
        };
      }

      const videoTitle =
        episode.video.title || `Episode from ${episode.series.title}`;

      const accessDetails = getVideoAccessDetails(
        episode.video.api_url,
        request,
        videoTitle
      );
      if (!accessDetails) {
        set.status = 404;
        return {
          status: "error",
          message: "URL Video tidak dapat dibuat atau path tidak valid",
        };
      }
      set.status = 200;
      return { status: "success", data: accessDetails };
    } catch (error: any) {
      console.error("Error getting episode URL info:", error.message);
      set.status = 500;
      return {
        status: "error",
        message: "Gagal mendapatkan informasi URL episode",
      };
    }
  })

  .get(
    "/api/stream/series/:seriesId/season/:seasonNumber/episode/:episodeNumber",
    async ({
      params: { seriesId, seasonNumber, episodeNumber },
      request,
      set,
    }) => {
      console.log("GET /api/stream/series/:seriesId/season/:seasonNumber/episode/:episodeNumber params:", { seriesId, seasonNumber, episodeNumber });
      try {
        const seriesIdNum = parseInt(seriesId, 10);
        const seasonNum = parseInt(seasonNumber, 10);
        const episodeNum = parseInt(episodeNumber, 10);

        if (isNaN(seriesIdNum) || isNaN(seasonNum) || isNaN(episodeNum)) {
          set.status = 400;
          return { status: "error", message: "Parameter tidak valid" };
        }

        const episode = await prisma.episode.findFirst({
          where: {
            series_id: seriesIdNum,
            season_number: seasonNum,
            episode_number: episodeNum,
          },
          select: {
            video: {
              select: { api_url: true, title: true },
            },
            series: {
              select: { title: true },
            },
          },
        });

        if (!episode || !episode.video) {
          set.status = 404;
          return { status: "error", message: "Episode tidak ditemukan" };
        }

        const videoTitle =
          episode.video.title ||
          `S${seasonNum}E${episodeNum} from ${episode.series.title}`;

        const accessDetails = getVideoAccessDetails(
          episode.video.api_url,
          request,
          videoTitle
        );
        if (!accessDetails) {
          set.status = 404;
          return {
            status: "error",
            message: "URL Video tidak dapat dibuat atau path tidak valid",
          };
        }
        set.status = 200;
        return { status: "success", data: accessDetails };
      } catch (error: any) {
        console.error("Error getting series episode URL info:", error.message);
        set.status = 500;
        return {
          status: "error",
          message: "Gagal mendapatkan informasi URL episode",
        };
      }
    }
  )

  .get(
    "/api/videos/stream/:encodedPath",
    async ({ params: { encodedPath }, request, set }) => {
      console.log("GET /api/videos/stream/:encodedPath params:", { encodedPath });
      try {
        const decodedPath = decodeURIComponent(encodedPath);
        const accessDetails = getVideoAccessDetails(
          decodedPath,
          request,
          `Video from path`
        );
        if (!accessDetails) {
          set.status = 404;
          return {
            status: "error",
            message: "URL Video tidak dapat dibuat atau path tidak valid",
          };
        }
        set.status = 200;
        return { status: "success", data: accessDetails };
      } catch (error: any) {
        console.error("Error getting direct URL info:", error.message);
        set.status = 500;
        return {
          status: "error",
          message: "Gagal mendapatkan informasi URL video langsung",
        };
      }
    }
  )

  .get("/images/series/:filename", ({ params: { filename }, set }) => {
    console.log("GET /images/series/:filename params:", { filename });
    const filePath = path.join(STORAGE_PATH, "series", filename);

    if (!fileExists(filePath)) {
      set.status = 404;
      return { status: "error", message: "File gambar tidak ditemukan" };
    }

    try {
      const fileContent = readFileSync(filePath);
      const fileExt = path.extname(filename).toLowerCase();

      let contentType = "application/octet-stream";
      if (fileExt === ".jpg" || fileExt === ".jpeg") contentType = "image/jpeg";
      else if (fileExt === ".png") contentType = "image/png";
      else if (fileExt === ".gif") contentType = "image/gif";
      else if (fileExt === ".webp") contentType = "image/webp";

      set.headers["Content-Type"] = contentType;
      return fileContent;
    } catch (error: any) {
      console.error(`Error reading image file: ${filePath} - ${error.message}`);
      set.status = 500;
      return { status: "error", message: "Gagal membaca file gambar" };
    }
  })

  .get("/api/series-images", ({ set }) => {
    console.log("GET /api/series-images");
    const seriesDir = path.join(STORAGE_PATH, "series");
    try {
      if (!fileExists(seriesDir) || !lstatSync(seriesDir).isDirectory()) {
        set.status = 404;
        return { status: "error", message: "Direktori series tidak ditemukan" };
      }

      const files = readdirSync(seriesDir);
      const fileList = files
        .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
        .map((file) => ({
          filename: file,
          url: `/images/series/${file}`,
        }));
      set.status = 200;
      return { status: "success", data: fileList };
    } catch (error: any) {
      console.error(
        `Error listing series directory: ${seriesDir} - ${error.message}`
      );
      set.status = 500;
      return { status: "error", message: "Gagal membaca direktori series" };
    }
  })

  .group("/api/videos", (group) =>
    group
      .get("/", async ({ set }) => {
        console.log("GET /api/videos");
        try {
          const videos = await prisma.video.findMany({
            include: {
              movie: true,
              episodes: {
                include: { series: true },
              },
            },
            orderBy: {
              updatedAt: "desc",
            },
          });
          set.status = 200;
          return { status: "success", data: videos };
        } catch (error: any) {
          console.error(`Error fetching all videos: ${error.message}`);
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil daftar video.",
            detail: error.message,
          };
        }
      })
      .get("/search", async ({ query, set }) => {
        console.log("GET /api/videos/search query:", query);
        const { q, limit = "10", page = "1" } = query as { q?: string, limit?: string, page?: string };

        if (!q || typeof q !== "string" || q.trim() === "") {
          set.status = 400;
          return {
            status: "error",
            message:
              "Parameter 'q' (kata kunci pencarian) diperlukan dan tidak boleh kosong.",
          };
        }

        const numLimit = parseInt(limit, 10);
        const numPage = parseInt(page, 10);

        if (
          isNaN(numLimit) ||
          numLimit <= 0 ||
          isNaN(numPage) ||
          numPage <= 0
        ) {
          set.status = 400;
          return {
            status: "error",
            message:
              "Parameter 'limit' atau 'page' tidak valid. Keduanya harus angka positif.",
          };
        }
        const skip = (numPage - 1) * numLimit;
        const searchTerm = q.trim();

        try {
          const videos = await prisma.video.findMany({
            where: {
              OR: [
                {
                  title: {
                    contains: searchTerm,
                  },
                },
                {
                  description: {
                    contains: searchTerm,
                  },
                },
              ],
            },
            include: {
              movie: true,
              episodes: {
                include: { series: true },
              },
            },
            skip,
            take: numLimit,
            orderBy: {
              updatedAt: "desc",
            },
          });

          const total = await prisma.video.count({
            where: {
              OR: [
                {
                  title: {
                    contains: searchTerm,
                  },
                },
                {
                  description: {
                    contains: searchTerm,
                  },
                },
              ],
            },
          });

          set.status = 200;
          return {
            status: "success",
            data: videos,
            meta: {
              total,
              page: numPage,
              limit: numLimit,
              totalPages: Math.ceil(total / numLimit),
              searchTerm: searchTerm,
            },
          };
        } catch (error: any) {
          console.error(`Error during video search: ${error.message}`);
          set.status = 500;
          return {
            status: "error",
            message:
              "Terjadi kesalahan internal saat melakukan pencarian video.",
            detail: error.message,
          };
        }
      })
      .get("/:id", async ({ params: { id }, set }) => {
        console.log("GET /api/videos/:id params:", { id });
        const videoId = parseInt(id, 10);
        if (isNaN(videoId)) {
          set.status = 400;
          return { status: "error", message: "ID Video tidak valid" };
        }
        try {
          const video = await prisma.video.findUnique({
            where: { id: videoId },
            include: {
              movie: true,
              episodes: {
                include: { series: true },
              },
            },
          });
          if (!video) {
            set.status = 404;
            return { status: "error", message: "Video tidak ditemukan" };
          }
          set.status = 200;
          return { status: "success", data: video };
        } catch (error: any) {
          console.error(
            `Error fetching video by ID ${videoId}: ${error.message}`
          );
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil data video.",
            detail: error.message,
          };
        }
      })
  )

  .group("/api/movies", (group) =>
    group
      .get("/", async ({ set }) => {
        console.log("GET /api/movies");
        try {
          const movies = await prisma.movie.findMany({
            include: { video: true },
            orderBy: { updatedAt: "desc" },
          });
          set.status = 200;
          return { status: "success", data: movies };
        } catch (error: any) {
          console.error(`Error fetching all movies: ${error.message}`);
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil daftar movie.",
            detail: error.message,
          };
        }
      })
      .get("/:id", async ({ params: { id }, set }) => {
        console.log("GET /api/movies/:id params:", { id });
        const movieId = parseInt(id, 10);
        if (isNaN(movieId)) {
          set.status = 400;
          return { status: "error", message: "ID Movie tidak valid" };
        }
        try {
          const movie = await prisma.movie.findUnique({
            where: { id: movieId },
            include: { video: true },
          });
          if (!movie) {
            set.status = 404;
            return { status: "error", message: "Movie tidak ditemukan" };
          }
          set.status = 200;
          return { status: "success", data: movie };
        } catch (error: any) {
          console.error(
            `Error fetching movie by ID ${movieId}: ${error.message}`
          );
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil data movie.",
            detail: error.message,
          };
        }
      })
  )

  .group("/api/series", (group) =>
    group
      .get("/", async ({ set }) => {
        console.log("GET /api/series");
        try {
          const seriesList = await prisma.series.findMany({
            include: {
              episodes: {
                orderBy: [{ season_number: "asc" }, { episode_number: "asc" }],
                include: { video: true },
              },
            },
            orderBy: { updatedAt: "desc" },
          });
          set.status = 200;
          return { status: "success", data: seriesList };
        } catch (error: any) {
          console.error(`Error fetching all series: ${error.message}`);
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil daftar series.",
            detail: error.message,
          };
        }
      })
      .get("/:id", async ({ params: { id }, set }) => {
        console.log("GET /api/series/:id params:", { id });
        const seriesId = parseInt(id, 10);
        if (isNaN(seriesId)) {
          set.status = 400;
          return { status: "error", message: "ID Series tidak valid" };
        }
        try {
          const seriesDetail = await prisma.series.findUnique({
            where: { id: seriesId },
            include: {
              episodes: {
                orderBy: [{ season_number: "asc" }, { episode_number: "asc" }],
                include: { video: true },
              },
            },
          });
          if (!seriesDetail) {
            set.status = 404;
            return { status: "error", message: "Series tidak ditemukan" };
          }
          set.status = 200;
          return { status: "success", data: seriesDetail };
        } catch (error: any) {
          console.error(
            `Error fetching series by ID ${seriesId}: ${error.message}`
          );
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil data series.",
            detail: error.message,
          };
        }
      })
  )

  .group("/api/episodes", (group) =>
    group
      .get("/", async ({ set }) => {
        console.log("GET /api/episodes");
        try {
          const episodes = await prisma.episode.findMany({
            orderBy: [
              { series_id: "asc" },
              { season_number: "asc" },
              { episode_number: "asc" },
            ],
            include: { video: true, series: true },
          });
          set.status = 200;
          return { status: "success", data: episodes };
        } catch (error: any) {
          console.error(`Error fetching all episodes: ${error.message}`);
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil daftar episode.",
            detail: error.message,
          };
        }
      })
      .get("/:id", async ({ params: { id }, set }) => {
        console.log("GET /api/episodes/:id params:", { id });
        const episodeId = parseInt(id, 10);
        if (isNaN(episodeId)) {
          set.status = 400;
          return { status: "error", message: "ID Episode tidak valid" };
        }
        try {
          const episode = await prisma.episode.findUnique({
            where: { id: episodeId },
            include: { video: true, series: true },
          });
          if (!episode) {
            set.status = 404;
            return { status: "error", message: "Episode tidak ditemukan" };
          }
          set.status = 200;
          return { status: "success", data: episode };
        } catch (error: any) {
          console.error(
            `Error fetching episode by ID ${episodeId}: ${error.message}`
          );
          set.status = 500;
          return {
            status: "error",
            message: "Gagal mengambil data episode.",
            detail: error.message,
          };
        }
      })
  )

  .listen(3000);

console.log(
  `🎵 Server musik berjalan di ${app.server?.hostname}:${app.server?.port}`
);

console.log("\n📚 Available API Endpoints:");
console.log("---------------------------------------------------");
console.log(
  `${"METHOD".padEnd(8)} | ${"PATH".padEnd(40)} | ${"PARAMS (Path/Query)"}`
);
console.log("---------------------------------------------------");

app.routes.forEach((route) => {
  const method = route.method.padEnd(8);
  const path = route.path.padEnd(40);

  // Extract path parameters (e.g., :id)
  const pathParams = route.path.match(/:[a-zA-Z0-9_]+/g) || [];

  // Try to extract query parameters if available in schema (this is best effort for Elysia)
  // Note: Elysia's internal route object structure might vary, but we can try to check schema
  let queryParams: string[] = [];
  // @ts-ignore - Accessing internal schema property if available
  if (route.hooks?.schema?.query) {
    // @ts-ignore
    try {
      // @ts-ignore
      const queryKeys = Object.keys(route.hooks.schema.query.properties || {});
      if (queryKeys.length > 0) {
        queryParams = queryKeys.map(k => `?${k}`);
      }
    } catch (e) {
      // Ignore if schema structure is different
    }
  }

  const paramsDisplay = [...pathParams, ...queryParams].join(", ") || "-";

  console.log(`${method} | ${path} | ${paramsDisplay}`);
});
console.log("---------------------------------------------------");
