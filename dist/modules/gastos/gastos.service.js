"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createGasto = createGasto;
exports.updateGasto = updateGasto;
exports.deleteGasto = deleteGasto;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const pagination_1 = require("../../lib/pagination");
async function findAll(userId, page, limit) {
    const where = { userId };
    if (!page && !limit) {
        return prisma_1.prisma.gasto.findMany({
            where,
            orderBy: { fecha: "desc" },
            include: {
                proveedor: { select: { id: true, nombre: true } },
                cultivo: { select: { id: true, nombre: true } },
                finca: { select: { id: true, nombre: true } },
            },
        });
    }
    const params = (0, pagination_1.getPaginationParams)({ page, limit });
    const [data, total] = await Promise.all([
        prisma_1.prisma.gasto.findMany({
            where,
            orderBy: { fecha: "desc" },
            skip: params.skip,
            take: params.take,
            include: {
                proveedor: { select: { id: true, nombre: true } },
                cultivo: { select: { id: true, nombre: true } },
                finca: { select: { id: true, nombre: true } },
            },
        }),
        prisma_1.prisma.gasto.count({ where }),
    ]);
    return (0, pagination_1.paginatedResponse)(data, total, { page, limit });
}
async function findById(id, userId) {
    const gasto = await prisma_1.prisma.gasto.findFirst({
        where: { id, userId },
        include: {
            proveedor: { select: { id: true, nombre: true } },
            cultivo: { select: { id: true, nombre: true } },
            finca: { select: { id: true, nombre: true } },
        },
    });
    if (!gasto)
        throw new types_1.AppError("Gasto no encontrado", 404);
    return gasto;
}
async function createGasto(input, userId) {
    return prisma_1.prisma.gasto.create({ data: { ...input, userId } });
}
async function updateGasto(id, input, userId) {
    const gasto = await prisma_1.prisma.gasto.findFirst({ where: { id, userId } });
    if (!gasto)
        throw new types_1.AppError("Gasto no encontrado", 404);
    return prisma_1.prisma.gasto.update({ where: { id }, data: input });
}
async function deleteGasto(id, userId) {
    const gasto = await prisma_1.prisma.gasto.findFirst({ where: { id, userId } });
    if (!gasto)
        throw new types_1.AppError("Gasto no encontrado", 404);
    return prisma_1.prisma.gasto.delete({ where: { id } });
}
//# sourceMappingURL=gastos.service.js.map