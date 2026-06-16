"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createCliente = createCliente;
exports.updateCliente = updateCliente;
exports.deactivateCliente = deactivateCliente;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const pagination_1 = require("../../lib/pagination");
async function findAll(page, limit) {
    if (!page && !limit) {
        return prisma_1.prisma.cliente.findMany({
            where: { activo: true },
            orderBy: { nombre: "asc" },
        });
    }
    const params = (0, pagination_1.getPaginationParams)({ page, limit });
    const [data, total] = await Promise.all([
        prisma_1.prisma.cliente.findMany({
            where: { activo: true },
            orderBy: { nombre: "asc" },
            skip: params.skip,
            take: params.take,
        }),
        prisma_1.prisma.cliente.count({ where: { activo: true } }),
    ]);
    return (0, pagination_1.paginatedResponse)(data, total, { page, limit });
}
async function findById(id) {
    const cliente = await prisma_1.prisma.cliente.findUnique({ where: { id } });
    if (!cliente)
        throw new types_1.AppError("Cliente no encontrado", 404);
    return cliente;
}
async function createCliente(input) {
    return prisma_1.prisma.cliente.create({ data: input });
}
async function updateCliente(id, input) {
    const cliente = await prisma_1.prisma.cliente.findUnique({ where: { id } });
    if (!cliente)
        throw new types_1.AppError("Cliente no encontrado", 404);
    return prisma_1.prisma.cliente.update({ where: { id }, data: input });
}
async function deactivateCliente(id) {
    const cliente = await prisma_1.prisma.cliente.findUnique({ where: { id } });
    if (!cliente)
        throw new types_1.AppError("Cliente no encontrado", 404);
    return prisma_1.prisma.cliente.update({ where: { id }, data: { activo: false } });
}
//# sourceMappingURL=clientes.service.js.map