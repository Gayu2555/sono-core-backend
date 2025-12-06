import { PrismaClient } from "../generated/prisma";

declare global {
    var __prisma: PrismaClient | undefined;
}

// Buat instance Prisma Client
const prismaClientSingleton = (): PrismaClient => {
    console.log("🔌 [Prisma] Initializing Prisma Client...");

    const client = new PrismaClient({
        log: [
            { emit: "stdout", level: "query" },
            { emit: "stdout", level: "info" },
            { emit: "stdout", level: "warn" },
            { emit: "stdout", level: "error" },
        ],
    });

    console.log("✅ [Prisma] Prisma Client initialized successfully");

    return client;
};

// Gunakan global instance untuk development (hot reload)
const prisma = globalThis.__prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
    globalThis.__prisma = prisma;
}

// Graceful shutdown handler
process.on("beforeExit", async () => {
    console.log("🔌 [Prisma] Disconnecting from database...");
    await prisma.$disconnect();
    console.log("✅ [Prisma] Disconnected from database");
});

export { prisma };
export default prisma;
