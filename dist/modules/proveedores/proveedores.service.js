"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createProveedor = createProveedor;
exports.updateProveedor = updateProveedor;
exports.deactivateProveedor = deactivateProveedor;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll() {
    return prisma_1.prisma.proveedor.findMany({
        where: { activo: true },
        orderBy: { nombre: "asc" },
    });
}
async function findById(id) {
    const proveedor = await prisma_1.prisma.proveedor.findUnique({ where: { id } });
    if (!proveedor)
        throw new types_1.AppError("Proveedor no encontrado", 404);
    return proveedor;
}
async function createProveedor(input) {
    return prisma_1.prisma.proveedor.create({ data: input });
}
async function updateProveedor(id, input) {
    const proveedor = await prisma_1.prisma.proveedor.findUnique({ where: { id } });
    if (!proveedor)
        throw new types_1.AppError("Proveedor no encontrado", 404);
    return prisma_1.prisma.proveedor.update({ where: { id }, data: input });
}
async function deactivateProveedor(id) {
    const proveedor = await prisma_1.prisma.proveedor.findUnique({ where: { id } });
    if (!proveedor)
        throw new types_1.AppError("Proveedor no encontrado", 404);
    return prisma_1.prisma.proveedor.update({ where: { id }, data: { activo: false } });
}
//# sourceMappingURL=proveedores.service.js.map