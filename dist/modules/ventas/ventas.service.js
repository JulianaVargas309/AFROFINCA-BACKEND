"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createVenta = createVenta;
exports.updateVenta = updateVenta;
exports.deleteVenta = deleteVenta;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const pagination_1 = require("../../lib/pagination");
async function findAll(userId, page, limit) {
    const where = { userId };
    if (!page && !limit) {
        return prisma_1.prisma.venta.findMany({
            where,
            orderBy: { fecha: "desc" },
            include: {
                cliente: { select: { id: true, nombre: true } },
                detalles: {
                    include: { producto: { select: { id: true, nombre: true } } },
                },
            },
        });
    }
    const params = (0, pagination_1.getPaginationParams)({ page, limit });
    const [data, total] = await Promise.all([
        prisma_1.prisma.venta.findMany({
            where,
            orderBy: { fecha: "desc" },
            skip: params.skip,
            take: params.take,
            include: {
                cliente: { select: { id: true, nombre: true } },
                detalles: {
                    include: { producto: { select: { id: true, nombre: true } } },
                },
            },
        }),
        prisma_1.prisma.venta.count({ where }),
    ]);
    return (0, pagination_1.paginatedResponse)(data, total, { page, limit });
}
async function findById(id, userId) {
    const venta = await prisma_1.prisma.venta.findFirst({
        where: { id, userId },
        include: {
            cliente: { select: { id: true, nombre: true } },
            detalles: {
                include: { producto: { select: { id: true, nombre: true } } },
            },
        },
    });
    if (!venta)
        throw new types_1.AppError("Venta no encontrada", 404);
    return venta;
}
async function createVenta(input, userId) {
    const cliente = await prisma_1.prisma.cliente.findUnique({
        where: { id: input.clienteId },
    });
    if (!cliente)
        throw new types_1.AppError("Cliente no encontrado", 404);
    const detallesConSubtotal = await Promise.all(input.detalles.map(async (d) => {
        const producto = await prisma_1.prisma.producto.findUnique({
            where: { id: d.productoId },
        });
        if (!producto)
            throw new types_1.AppError(`Producto ${d.productoId} no encontrado`, 404);
        if (producto.stockActual < d.cantidad) {
            throw new types_1.AppError(`Stock insuficiente para ${producto.nombre}`);
        }
        return {
            productoId: d.productoId,
            cantidad: d.cantidad,
            precioUnitario: d.precioUnitario,
            subtotal: d.cantidad * d.precioUnitario,
        };
    }));
    const total = detallesConSubtotal.reduce((sum, d) => sum + d.subtotal, 0);
    const venta = await prisma_1.prisma.$transaction(async (tx) => {
        for (const d of detallesConSubtotal) {
            await tx.producto.update({
                where: { id: d.productoId },
                data: { stockActual: { decrement: d.cantidad } },
            });
        }
        return tx.venta.create({
            data: {
                clienteId: input.clienteId,
                userId,
                total,
                detalles: { create: detallesConSubtotal },
            },
            include: {
                cliente: { select: { id: true, nombre: true } },
                detalles: {
                    include: { producto: { select: { id: true, nombre: true } } },
                },
            },
        });
    });
    return venta;
}
async function updateVenta(id, input, userId) {
    const venta = await prisma_1.prisma.venta.findFirst({ where: { id, userId } });
    if (!venta)
        throw new types_1.AppError("Venta no encontrada", 404);
    if (venta.estado === "ANULADA") {
        throw new types_1.AppError("No se puede modificar una venta anulada");
    }
    if (input.estado === "ANULADA") {
        await prisma_1.prisma.$transaction(async (tx) => {
            const detalles = await tx.detalleVenta.findMany({ where: { ventaId: id } });
            for (const d of detalles) {
                await tx.producto.update({
                    where: { id: d.productoId },
                    data: { stockActual: { increment: d.cantidad } },
                });
            }
        });
    }
    return prisma_1.prisma.venta.update({
        where: { id },
        data: { estado: input.estado },
        include: {
            cliente: { select: { id: true, nombre: true } },
            detalles: {
                include: { producto: { select: { id: true, nombre: true } } },
            },
        },
    });
}
async function deleteVenta(id, userId) {
    const venta = await prisma_1.prisma.venta.findFirst({ where: { id, userId } });
    if (!venta)
        throw new types_1.AppError("Venta no encontrada", 404);
    if (venta.estado === "ANULADA") {
        throw new types_1.AppError("La venta ya está anulada");
    }
    await prisma_1.prisma.$transaction(async (tx) => {
        const detalles = await tx.detalleVenta.findMany({ where: { ventaId: id } });
        for (const d of detalles) {
            await tx.producto.update({
                where: { id: d.productoId },
                data: { stockActual: { increment: d.cantidad } },
            });
        }
        await tx.venta.update({
            where: { id },
            data: { estado: "ANULADA" },
        });
    });
    return prisma_1.prisma.venta.findFirst({
        where: { id },
        include: {
            cliente: { select: { id: true, nombre: true } },
            detalles: {
                include: { producto: { select: { id: true, nombre: true } } },
            },
        },
    });
}
//# sourceMappingURL=ventas.service.js.map