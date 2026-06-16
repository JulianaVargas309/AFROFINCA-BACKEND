"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createCultivo = createCultivo;
exports.updateCultivo = updateCultivo;
exports.deactivateCultivo = deactivateCultivo;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function verifyAccess(loteId, userId) {
    const lote = await prisma_1.prisma.lote.findFirst({
        where: { id: loteId, finca: { userId } },
    });
    if (!lote)
        throw new types_1.AppError("Lote no encontrado", 404);
    return lote;
}
async function findAll(loteId, userId) {
    await verifyAccess(loteId, userId);
    return prisma_1.prisma.cultivo.findMany({
        where: { loteId, activo: true },
        orderBy: { fechaSiembra: "desc" },
    });
}
async function findById(id, userId) {
    const cultivo = await prisma_1.prisma.cultivo.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!cultivo)
        throw new types_1.AppError("Cultivo no encontrado", 404);
    return cultivo;
}
async function createCultivo(input, userId) {
    await verifyAccess(input.loteId, userId);
    return prisma_1.prisma.cultivo.create({ data: input });
}
async function updateCultivo(id, input, userId) {
    const cultivo = await prisma_1.prisma.cultivo.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!cultivo)
        throw new types_1.AppError("Cultivo no encontrado", 404);
    return prisma_1.prisma.cultivo.update({ where: { id }, data: input });
}
async function deactivateCultivo(id, userId) {
    const cultivo = await prisma_1.prisma.cultivo.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!cultivo)
        throw new types_1.AppError("Cultivo no encontrado", 404);
    return prisma_1.prisma.cultivo.update({ where: { id }, data: { activo: false } });
}
//# sourceMappingURL=cultivos.service.js.map