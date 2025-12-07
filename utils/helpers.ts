/**
 * Helper Functions
 * =================
 * File ini berisi utility functions yang digunakan di seluruh aplikasi.
 */

import { existsSync, mkdirSync } from "fs";
import { join } from "path";

// =====================
// CONSTANTS
// =====================

/** Path untuk menyimpan file storage */
export const STORAGE_PATH = join(process.cwd(), "storage");

/** Path untuk menyimpan file public */
export const PUBLIC_PATH = join(process.cwd(), "public");

/** Path untuk menyimpan gambar */
export const IMAGES_PATH = join(PUBLIC_PATH, "images");

/** Path untuk cover album dari Laravel dashboard */
export const ALBUM_COVERS_PATH = "/dashboard/sono---dashboard/storage/app/public/albums";

/** Default pagination limit */
export const DEFAULT_PAGE_SIZE = 10;

/** Maximum pagination limit */
export const MAX_PAGE_SIZE = 100;

// =====================
// DIRECTORY FUNCTIONS
// =====================

/**
 * Memastikan direktori ada, jika tidak maka buat
 * @param dirPath - Path direktori yang akan dicek/dibuat
 */
export async function ensureDirectoryExists(dirPath: string): Promise<void> {
    console.log(`📁 [Helper] Checking directory: ${dirPath}`);

    if (!existsSync(dirPath)) {
        console.log(`📁 [Helper] Creating directory: ${dirPath}`);
        mkdirSync(dirPath, { recursive: true });
        console.log(`✅ [Helper] Directory created: ${dirPath}`);
    } else {
        console.log(`✅ [Helper] Directory exists: ${dirPath}`);
    }
}

// =====================
// PAGINATION FUNCTIONS
// =====================

/**
 * Interface untuk pagination parameters
 */
export interface PaginationParams {
    page?: number;
    limit?: number;
}

/**
 * Interface untuk pagination result
 */
export interface PaginationMeta {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

/**
 * Parse pagination parameters dari query string
 * @param params - Query parameters
 * @returns Parsed pagination parameters dengan skip dan take
 */
export function parsePagination(params: PaginationParams): { skip: number; take: number; page: number; limit: number } {
    const page = Math.max(1, Number(params.page) || 1);
    const limit = Math.min(MAX_PAGE_SIZE, Math.max(1, Number(params.limit) || DEFAULT_PAGE_SIZE));
    const skip = (page - 1) * limit;

    console.log(`📄 [Pagination] Page: ${page}, Limit: ${limit}, Skip: ${skip}`);

    return { skip, take: limit, page, limit };
}

/**
 * Buat pagination metadata
 * @param totalItems - Total jumlah item
 * @param page - Halaman saat ini
 * @param pageSize - Jumlah item per halaman
 * @returns Pagination metadata
 */
export function createPaginationMeta(totalItems: number, page: number, pageSize: number): PaginationMeta {
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        currentPage: page,
        pageSize,
        totalItems,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
    };
}

// =====================
// RESPONSE FUNCTIONS
// =====================

/**
 * Interface untuk standard API response
 */
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
    meta?: PaginationMeta;
}

/**
 * Buat success response
 * @param message - Pesan sukses
 * @param data - Data yang dikembalikan
 * @param meta - Optional pagination metadata
 * @returns API response object
 */
export function successResponse<T>(message: string, data?: T, meta?: PaginationMeta): ApiResponse<T> {
    console.log(`✅ [Response] Success: ${message}`);
    return {
        success: true,
        message,
        data,
        ...(meta && { meta }),
    };
}

/**
 * Buat error response
 * @param message - Pesan error
 * @param error - Detail error (optional)
 * @returns API response object
 */
export function errorResponse(message: string, error?: string): ApiResponse<null> {
    console.error(`❌ [Response] Error: ${message}`, error ? `- ${error}` : "");
    return {
        success: false,
        message,
        error,
    };
}

// =====================
// LOGGING FUNCTIONS
// =====================

/**
 * Log request masuk
 * @param method - HTTP method
 * @param path - Request path
 * @param params - Request parameters
 */
export function logRequest(method: string, path: string, params?: Record<string, any>): void {
    const timestamp = new Date().toISOString();
    console.log(`\n📨 [${timestamp}] ${method} ${path}`);

    if (params && Object.keys(params).length > 0) {
        console.log(`   Parameters:`, JSON.stringify(params, null, 2));
    }
}

/**
 * Log operasi database
 * @param operation - Jenis operasi (CREATE, READ, UPDATE, DELETE)
 * @param model - Nama model
 * @param details - Detail operasi
 */
export function logDbOperation(operation: string, model: string, details?: string): void {
    console.log(`📊 [DB] ${operation} on ${model}${details ? `: ${details}` : ""}`);
}

// =====================
// VALIDATION FUNCTIONS
// =====================

/**
 * Validasi bahwa ID adalah number positif
 * @param id - ID yang akan divalidasi
 * @returns true jika valid, false jika tidak
 */
export function isValidId(id: any): boolean {
    const numId = Number(id);
    return !isNaN(numId) && numId > 0 && Number.isInteger(numId);
}

/**
 * Parse ID menjadi number
 * @param id - ID yang akan di-parse
 * @returns Parsed ID atau null jika tidak valid
 */
export function parseId(id: any): number | null {
    if (!isValidId(id)) {
        return null;
    }
    return Number(id);
}

// =====================
// STRING FUNCTIONS
// =====================

/**
 * Sanitize string untuk keamanan
 * @param str - String yang akan di-sanitize
 * @returns Sanitized string
 */
export function sanitizeString(str: string): string {
    return str.trim().replace(/[<>]/g, "");
}

/**
 * Generate slug dari string
 * @param str - String yang akan dijadikan slug
 * @returns Slug string
 */
export function generateSlug(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
