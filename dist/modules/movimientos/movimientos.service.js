"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.createMovimiento = createMovimiento;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll(productoId) {
    return prisma_1.prisma.movimientoInventario.findMany({
        where: { productoId },
        orderBy: { fecha: "desc" },
        include: { user: { select: { id: true, nombre: true } } },
    });
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
//# sourceMappingURL=movimientos.service.js.map