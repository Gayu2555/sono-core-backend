
export interface BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

/** Query parameters untuk pagination */
export interface PaginationQuery {
    page?: string;
    limit?: string;
}

/** Query parameters untuk search */
export interface SearchQuery extends PaginationQuery {
    q?: string;
    search?: string;
}

// =====================
// USER TYPES
// =====================

/** Create user request */
export interface CreateUserRequest {
    username: string;
    email: string;
    password: string;
}

/** Update user request */
export interface UpdateUserRequest {
    username?: string;
    email?: string;
    password?: string;
    picture?: string;
}

/** Login request */
export interface LoginRequest {
    email: string;
    password: string;
}

/** Google OAuth callback data */
export interface GoogleOAuthCallback {
    code: string;
    state?: string;
}

/** Google user info from OAuth */
export interface GoogleUserInfo {
    id: string;
    email: string;
    name: string;
    picture?: string;
}

/** Auth response */
export interface AuthResponse {
    user: {
        id: number;
        username: string;
        email: string;
        picture?: string | null;
    };
    token?: string;
}

// =====================
// ARTIST TYPES
// =====================

/** Create artist request */
export interface CreateArtistRequest {
    name: string;
    bio?: string;
    image?: string;
}

/** Update artist request */
export interface UpdateArtistRequest {
    name?: string;
    bio?: string;
    image?: string;
}

// =====================
// ALBUM TYPES
// =====================

/** Create album request */
export interface CreateAlbumRequest {
    title: string;
    artistId: number;
    releaseYear?: number;
    coverImage?: string;
    description?: string;
}

/** Update album request */
export interface UpdateAlbumRequest {
    title?: string;
    artistId?: number;
    releaseYear?: number;
    coverImage?: string;
    description?: string;
}

// =====================
// MUSIC TYPES
// =====================

/** Create music request */
export interface CreateMusicRequest {
    title: string;
    albumId: number;
    artistId: number;
    duration?: string;
    genre?: string;
    apiUrl: string;
}

/** Update music request */
export interface UpdateMusicRequest {
    title?: string;
    albumId?: number;
    artistId?: number;
    duration?: string;
    genre?: string;
    apiUrl?: string;
}

/** Record music play request */
export interface RecordPlayRequest {
    userId?: number;
    ip?: string;
    device?: string;
}

// =====================
// PLAYLIST TYPES
// =====================

/** Create playlist request */
export interface CreatePlaylistRequest {
    title: string;
    description?: string;
    userId?: number;
    isPublic?: boolean;
    coverImage?: string;
}

/** Update playlist request */
export interface UpdatePlaylistRequest {
    title?: string;
    description?: string;
    isPublic?: boolean;
    coverImage?: string;
}

/** Add music to playlist request */
export interface AddToPlaylistRequest {
    musicId: number;
    sortOrder?: number;
}

/** Reorder playlist request */
export interface ReorderPlaylistRequest {
    musicIds: number[];
}

// =====================
// VIDEO TYPES
// =====================

import type { VideoType } from "../../audio-fe-be/generated/prisma";

/** Create video request */
export interface CreateVideoRequest {
    title: string;
    description?: string;
    thumbnail?: string;
    api_url: string;
    type: VideoType;
    release_year?: number;
    duration?: string;
}

/** Update video request */
export interface UpdateVideoRequest {
    title?: string;
    description?: string;
    thumbnail?: string;
    api_url?: string;
    type?: VideoType;
    release_year?: number;
    duration?: string;
}

// =====================
// MOVIE TYPES
// =====================

/** Create movie request (includes video data) */
export interface CreateMovieRequest {
    title: string;
    description?: string;
    thumbnail?: string;
    api_url: string;
    release_year?: number;
    duration?: string;
    director?: string;
    cast?: string;
    genre?: string;
}

/** Update movie request */
export interface UpdateMovieRequest {
    title?: string;
    description?: string;
    thumbnail?: string;
    api_url?: string;
    release_year?: number;
    duration?: string;
    director?: string;
    cast?: string;
    genre?: string;
}

// =====================
// SERIES TYPES
// =====================

/** Create series request */
export interface CreateSeriesRequest {
    title: string;
    description?: string;
    thumbnail?: string;
    start_year?: number;
    end_year?: number;
}

/** Update series request */
export interface UpdateSeriesRequest {
    title?: string;
    description?: string;
    thumbnail?: string;
    start_year?: number;
    end_year?: number;
}

// =====================
// EPISODE TYPES
// =====================

/** Create episode request */
export interface CreateEpisodeRequest {
    title: string;
    description?: string;
    thumbnail?: string;
    api_url: string;
    duration?: string;
    series_id: number;
    season_number: number;
    episode_number: number;
}

/** Update episode request */
export interface UpdateEpisodeRequest {
    title?: string;
    description?: string;
    thumbnail?: string;
    api_url?: string;
    duration?: string;
    series_id?: number;
    season_number?: number;
    episode_number?: number;
}

// =====================
// FAVORITE TYPES
// =====================

/** Add favorite music request */
export interface AddFavoriteMusicRequest {
    userId: number;
    musicId: number;
}

/** Add favorite video request */
export interface AddFavoriteVideoRequest {
    userId: number;
    videoId: number;
}

// =====================
// HISTORY TYPES
// =====================

/** Add history request */
export interface AddHistoryRequest {
    userId: number;
    musicId?: number;
    videoId?: number;
}
