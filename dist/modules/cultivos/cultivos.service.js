"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createCultivo = createCultivo;
exports.updateCultivo = updateCultivo;
exports.deactivateCultivo = deactivateCultivo;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const ownership_1 = require("../../lib/ownership");
async function findAll(loteId, userId) {
    const where = {
        activo: true,
        lote: { finca: { userId } },
    };
    if (loteId) {
        await (0, ownership_1.verifyLoteOwnership)(loteId, userId);
        where.loteId = loteId;
    }
    return prisma_1.prisma.cultivo.findMany({
        where,
        orderBy: { fechaSiembra: "desc" },
        include: { lote: { select: { id: true, nombre: true } } },
    });
}
async function findById(id, userId) {
    const cultivo = await prisma_1.prisma.cultivo.findFirst({
        where: { id, lote: { finca: { userId } } },
        include: {
            lote: { select: { id: true, nombre: true } },
            gastos: { select: { id: true, descripcion: true, monto: true } },
        },
    });
    if (!cultivo)
        throw new types_1.AppError("Cultivo no encontrado", 404);
    return cultivo;
}
async function createCultivo(input, userId) {
    await (0, ownership_1.verifyLoteOwnership)(input.loteId, userId);
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