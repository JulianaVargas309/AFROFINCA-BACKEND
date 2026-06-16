"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createFinca = createFinca;
exports.updateFinca = updateFinca;
exports.deactivateFinca = deactivateFinca;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const pagination_1 = require("../../lib/pagination");
async function findAll(userId, page, limit) {
    if (!page && !limit) {
        return prisma_1.prisma.finca.findMany({
            where: { userId, activo: true },
            orderBy: { createdAt: "desc" },
        });
    }
    const params = (0, pagination_1.getPaginationParams)({ page, limit });
    const [data, total] = await Promise.all([
        prisma_1.prisma.finca.findMany({
            where: { userId, activo: true },
            orderBy: { createdAt: "desc" },
            skip: params.skip,
            take: params.take,
        }),
        prisma_1.prisma.finca.count({ where: { userId, activo: true } }),
    ]);
    return (0, pagination_1.paginatedResponse)(data, total, { page, limit });
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