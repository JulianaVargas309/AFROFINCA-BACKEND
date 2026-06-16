"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.refreshUserToken = refreshUserToken;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const prisma_1 = require("../../lib/prisma");
const env_1 = require("../../config/env");
const types_1 = require("../../types");
function generateAccessToken(user) {
    return jsonwebtoken_1.default.sign(user, env_1.env.JWT_SECRET, {
        expiresIn: env_1.env.JWT_EXPIRES_IN,
    });
}
async function generateRefreshToken(userId) {
    const token = crypto_1.default.randomBytes(40).toString("hex");
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + env_1.env.REFRESH_TOKEN_EXPIRES_IN_DAYS);
    await prisma_1.prisma.refreshToken.create({
        data: { token, userId, expiresAt },
    });
    return token;
}
async function registerUser(input) {
    const existing = await prisma_1.prisma.user.findUnique({
        where: { email: input.email },
    });
    if (existing) {
        throw new types_1.AppError("El email ya está registrado");
    }
    const password = await bcryptjs_1.default.hash(input.password, 10);
    const user = await prisma_1.prisma.user.create({
        data: { ...input, password },
        select: {
            id: true,
            nombre: true,
            email: true,
            rol: true,
            activo: true,
            createdAt: true,
        },
    });
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user.id);
    return { user, accessToken, refreshToken };
}
async function loginUser(input) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email: input.email },
    });
    if (!user || !user.activo) {
        throw new types_1.AppError("Credenciales inválidas", 401);
    }
    const valid = await bcryptjs_1.default.compare(input.password, user.password);
    if (!valid) {
        throw new types_1.AppError("Credenciales inválidas", 401);
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user.id);
    return {
        user: {
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol,
        },
        accessToken,
        refreshToken,
    };
}
async function refreshUserToken(refreshToken) {
    const stored = await prisma_1.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
        include: { user: true },
    });
    if (!stored) {
        throw new types_1.AppError("Refresh token inválido", 401);
    }
    if (stored.expiresAt < new Date()) {
        await prisma_1.prisma.refreshToken.delete({ where: { id: stored.id } });
        throw new types_1.AppError("Refresh token expirado", 401);
    }
    if (!stored.user.activo) {
        await prisma_1.prisma.refreshToken.delete({ where: { id: stored.id } });
        throw new types_1.AppError("Usuario desactivado", 401);
    }
    await prisma_1.prisma.refreshToken.delete({ where: { id: stored.id } });
    const accessToken = generateAccessToken(stored.user);
    const newRefreshToken = await generateRefreshToken(stored.user.id);
    return {
        user: {
            id: stored.user.id,
            nombre: stored.user.nombre,
            email: stored.user.email,
            rol: stored.user.rol,
        },
        accessToken,
        refreshToken: newRefreshToken,
    };
}
//# sourceMappingURL=auth.service.js.map