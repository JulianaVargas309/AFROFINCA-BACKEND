"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createFinca = createFinca;
exports.updateFinca = updateFinca;
exports.deactivateFinca = deactivateFinca;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll(userId) {
    return prisma_1.prisma.finca.findMany({
        where: { userId, activo: true },
        orderBy: { createdAt: "desc" },
    });
}
async function findById(id, userId) {
    const finca = await prisma_1.prisma.finca.findFirst({
        where: { id, userId },
    });
    if (!finca)
        throw new types_1.AppError("Finca no encontrada", 404);
    return finca;
}
async function createFinca(input, userId) {
    return prisma_1.prisma.finca.create({
        data: { ...input, userId },
    });
}
async function updateFinca(id, input, userId) {
    const finca = await prisma_1.prisma.finca.findFirst({ where: { id, userId } });
    if (!finca)
        throw new types_1.AppError("Finca no encontrada", 404);
    return prisma_1.prisma.finca.update({
        where: { id },
        data: input,
    });
}
async function deactivateFinca(id, userId) {
    const finca = await prisma_1.prisma.finca.findFirst({ where: { id, userId } });
    if (!finca)
        throw new types_1.AppError("Finca no encontrada", 404);
    return prisma_1.prisma.finca.update({
        where: { id },
        data: { activo: false },
    });
}
//# sourceMappingURL=fincas.service.js.map