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
exports.changePassword = changePassword;
exports.changeRol = changeRol;
exports.updateProfile = updateProfile;
exports.findByDocumento = findByDocumento;
exports.search = search;
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
        where: { documento: input.documento },
    });
    if (existing)
        throw new types_1.AppError("El documento ya está registrado");
    const password = await bcryptjs_1.default.hash(input.password, 10);
    return prisma_1.prisma.user.create({
        data: { ...input, password, nombre: input.nombre ?? input.documento },
        omit: { password: true },
    });
}
async function updateUser(id, input) {
    const user = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    const { roleId, ...rest } = input;
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            ...rest,
            ...(roleId !== undefined ? { role: roleId ? { connect: { id: roleId } } : { disconnect: true } } : {}),
        },
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
async function changePassword(id, input) {
    const user = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    const isValid = await bcryptjs_1.default.compare(input.currentPassword, user.password);
    if (!isValid)
        throw new types_1.AppError("Contraseña actual incorrecta", 401);
    const password = await bcryptjs_1.default.hash(input.newPassword, 10);
    return prisma_1.prisma.user.update({
        where: { id },
        data: { password },
        omit: { password: true },
    });
}
async function changeRol(id, input) {
    const user = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    return prisma_1.prisma.user.update({
        where: { id },
        data: {
            rol: input.rol,
            ...(input.roleId !== undefined ? { role: { connect: { id: input.roleId } } } : {}),
        },
        omit: { password: true },
    });
}
async function updateProfile(id, input) {
    const user = await prisma_1.prisma.user.findUnique({ where: { id } });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    const { roleId, ...profileData } = input;
    return prisma_1.prisma.user.update({
        where: { id },
        data: profileData,
        omit: { password: true },
    });
}
async function findByDocumento(documento) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { documento },
        omit: { password: true },
    });
    if (!user)
        throw new types_1.AppError("Usuario no encontrado", 404);
    return user;
}
async function search(query) {
    return prisma_1.prisma.user.findMany({
        where: {
            OR: [
                { nombre: { contains: query, mode: "insensitive" } },
                { apellido: { contains: query, mode: "insensitive" } },
                { documento: { contains: query, mode: "insensitive" } },
            ],
        },
        omit: { password: true },
        orderBy: { nombre: "asc" },
    });
}
//# sourceMappingURL=users.service.js.map