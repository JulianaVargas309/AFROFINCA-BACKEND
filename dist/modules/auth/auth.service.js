"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../lib/prisma");
const env_1 = require("../../config/env");
const types_1 = require("../../types");
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
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, nombre: user.nombre, rol: user.rol }, env_1.env.jwtSecret, { expiresIn: env_1.env.jwtExpiresIn });
    return { user, token };
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
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, nombre: user.nombre, rol: user.rol }, env_1.env.jwtSecret, { expiresIn: env_1.env.jwtExpiresIn });
    return {
        user: {
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol,
        },
        token,
    };
}
//# sourceMappingURL=auth.service.js.map