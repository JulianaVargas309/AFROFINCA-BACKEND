"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createMovimiento = createMovimiento;
exports.deleteMovimiento = deleteMovimiento;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll(productoId) {
    return prisma_1.prisma.movimientoInventario.findMany({
        where: { productoId },
        orderBy: { fecha: "desc" },
        include: { user: { select: { id: true, nombre: true } } },
    });
}
async function findById(id) {
    const movimiento = await prisma_1.prisma.movimientoInventario.findUnique({
        where: { id },
        include: {
            producto: { select: { id: true, nombre: true } },
            user: { select: { id: true, nombre: true } },
        },
    });
    if (!movimiento)
        throw new types_1.AppError("Movimiento no encontrado", 404);
    return movimiento;
}
async function createMovimiento(input, userId) {
    const producto = await prisma_1.prisma.producto.findUnique({
        where: { id: input.productoId },
    });
    if (!producto)
        throw new types_1.AppError("Producto no encontrado", 404);
    if (input.tipo === "salida" && producto.stockActual < input.cantidad) {
        throw new types_1.AppError("Stock insuficiente");
    }
    const [movimiento] = await prisma_1.prisma.$transaction([
        prisma_1.prisma.movimientoInventario.create({
            data: { ...input, userId },
        }),
        prisma_1.prisma.producto.update({
            where: { id: input.productoId },
            data: {
                stockActual: input.tipo === "entrada"
                    ? { increment: input.cantidad }
                    : { decrement: input.cantidad },
            },
        }),
    ]);
    return movimiento;
}
async function deleteMovimiento(id) {
    const movimiento = await prisma_1.prisma.movimientoInventario.findUnique({ where: { id } });
    if (!movimiento)
        throw new types_1.AppError("Movimiento no encontrado", 404);
    return prisma_1.prisma.$transaction(async (tx) => {
        await tx.producto.update({
            where: { id: movimiento.productoId },
            data: {
                stockActual: movimiento.tipo === "salida"
                    ? { increment: movimiento.cantidad }
                    : { decrement: movimiento.cantidad },
            },
        });
        return tx.movimientoInventario.delete({ where: { id } });
    });
}
//# sourceMappingURL=movimientos.service.js.map