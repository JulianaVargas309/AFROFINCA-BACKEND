"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createLote = createLote;
exports.updateLote = updateLote;
exports.deactivateLote = deactivateLote;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function verifyFincaOwnership(fincaId, userId) {
    const finca = await prisma_1.prisma.finca.findFirst({
        where: { id: fincaId, userId },
    });
    if (!finca)
        throw new types_1.AppError("Finca no encontrada", 404);
    return finca;
}
async function findAll(fincaId, userId) {
    await verifyFincaOwnership(fincaId, userId);
    return prisma_1.prisma.lote.findMany({
        where: { fincaId, activo: true },
        orderBy: { createdAt: "desc" },
    });
}
async function findById(id, userId) {
    const lote = await prisma_1.prisma.lote.findFirst({
        where: { id, finca: { userId } },
    });
    if (!lote)
        throw new types_1.AppError("Lote no encontrado", 404);
    return lote;
}
async function createLote(input, userId) {
    await verifyFincaOwnership(input.fincaId, userId);
    return prisma_1.prisma.lote.create({ data: input });
}
async function updateLote(id, input, userId) {
    const lote = await prisma_1.prisma.lote.findFirst({
        where: { id, finca: { userId } },
    });
    if (!lote)
        throw new types_1.AppError("Lote no encontrado", 404);
    return prisma_1.prisma.lote.update({ where: { id }, data: input });
}
async function deactivateLote(id, userId) {
    const lote = await prisma_1.prisma.lote.findFirst({
        where: { id, finca: { userId } },
    });
    if (!lote)
        throw new types_1.AppError("Lote no encontrado", 404);
    return prisma_1.prisma.lote.update({ where: { id }, data: { activo: false } });
}
//# sourceMappingURL=lotes.service.js.map