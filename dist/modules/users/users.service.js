"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deactivateUser = deactivateUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll() {
    return prisma_1.prisma.user.findMany({
        omit: { password: true },
        orderBy: { createdAt: "desc" },
    });
}
async function findById(id) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id },
        omit: { password: true },
    });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    return user;
}
async function createUser(input) {
    const existing = await prisma_1.prisma.user.findUnique({
        where: { email: input.email },
    });
    if (existing)
        throw new types_1.AppError("El email ya está registrado");
    const password = await bcryptjs_1.default.hash(input.password, 10);
    return prisma_1.prisma.user.create({
        data: { ...input, password },
        omit: { password: true },
    });
}
async function updateUser(id, input) {
    const user = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    if (input.email && input.email !== user.email) {
        const existing = await prisma_1.prisma.user.findUnique({
            where: { email: input.email },
        });
        if (existing)
            throw new types_1.AppError("El email ya está registrado");
    }
    const data = { ...input };
    if (data.password) {
        data.password = await bcryptjs_1.default.hash(data.password, 10);
    }
    return prisma_1.prisma.user.update({
        where: { id },
        data,
        omit: { password: true },
    });
}
async function deactivateUser(id) {
    const user = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    return prisma_1.prisma.user.update({
        where: { id },
        data: { activo: false },
        omit: { password: true },
    });
}
//# sourceMappingURL=users.service.js.map