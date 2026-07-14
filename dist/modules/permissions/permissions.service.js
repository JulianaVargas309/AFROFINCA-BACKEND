"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll() {
    return prisma_1.prisma.permission.findMany({
        where: { activo: true },
        orderBy: { nombre: "asc" },
    });
}
async function findById(id) {
    const permission = await prisma_1.prisma.permission.findUnique({ where: { id } });
    if (!permission)
        throw new types_1.AppError("Permiso no encontrado", 404);
    return permission;
}
async function create(input) {
    return prisma_1.prisma.permission.create({ data: input });
}
async function update(id, input) {
    const permission = await prisma_1.prisma.permission.findUnique({ where: { id } });
    if (!permission)
        throw new types_1.AppError("Permiso no encontrado", 404);
    return prisma_1.prisma.permission.update({ where: { id }, data: input });
}
async function remove(id) {
    const permission = await prisma_1.prisma.permission.findUnique({ where: { id } });
    if (!permission)
        throw new types_1.AppError("Permiso no encontrado", 404);
    return prisma_1.prisma.permission.update({
        where: { id },
        data: { activo: false },
    });
}
//# sourceMappingURL=permissions.service.js.map