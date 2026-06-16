"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createProducto = createProducto;
exports.updateProducto = updateProducto;
exports.deactivateProducto = deactivateProducto;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const pagination_1 = require("../../lib/pagination");
async function findAll(page, limit) {
    if (!page && !limit) {
        return prisma_1.prisma.producto.findMany({
            where: { activo: true },
            orderBy: { nombre: "asc" },
        });
    }
    const params = (0, pagination_1.getPaginationParams)({ page, limit });
    const [data, total] = await Promise.all([
        prisma_1.prisma.producto.findMany({
            where: { activo: true },
            orderBy: { nombre: "asc" },
            skip: params.skip,
            take: params.take,
        }),
        prisma_1.prisma.producto.count({ where: { activo: true } }),
    ]);
    return (0, pagination_1.paginatedResponse)(data, total, { page, limit });
}
async function findById(id) {
    const producto = await prisma_1.prisma.producto.findUnique({ where: { id } });
    if (!producto)
        throw new types_1.AppError("Producto no encontrado", 404);
    return producto;
}
async function createProducto(input) {
    return prisma_1.prisma.producto.create({ data: input });
}
async function updateProducto(id, input) {
    const producto = await prisma_1.prisma.producto.findUnique({ where: { id } });
    if (!producto)
        throw new types_1.AppError("Producto no encontrado", 404);
    return prisma_1.prisma.producto.update({ where: { id }, data: input });
}
async function deactivateProducto(id) {
    const producto = await prisma_1.prisma.producto.findUnique({ where: { id } });
    if (!producto)
        throw new types_1.AppError("Producto no encontrado", 404);
    return prisma_1.prisma.producto.update({ where: { id }, data: { activo: false } });
}
//# sourceMappingURL=productos.service.js.map