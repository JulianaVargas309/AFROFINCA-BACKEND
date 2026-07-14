"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createBitacora = createBitacora;
exports.updateBitacora = updateBitacora;
exports.deleteBitacora = deleteBitacora;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const pagination_1 = require("../../lib/pagination");
const ownership_1 = require("../../lib/ownership");
async function findAll(userId, filters) {
    const where = {
        lote: { finca: { userId } },
    };
    if (filters.loteId)
        where.loteId = filters.loteId;
    if (filters.cultivoId)
        where.cultivoId = filters.cultivoId;
    if (filters.actividad)
        where.actividad = filters.actividad;
    if (filters.fechaDesde || filters.fechaHasta) {
        where.fecha = {};
        if (filters.fechaDesde)
            where.fecha.gte = new Date(filters.fechaDesde);
        if (filters.fechaHasta)
            where.fecha.lte = new Date(filters.fechaHasta);
    }
    const orderBy = { fecha: "desc" };
    const include = {
        lote: { select: { id: true, nombre: true } },
        cultivo: { select: { id: true, nombre: true } },
        producto: { select: { id: true, nombre: true } },
        user: { select: { id: true, nombre: true } },
    };
    if (!filters.page) {
        const opts = { where, orderBy, include };
        if (filters.limit)
            opts.take = filters.limit;
        return prisma_1.prisma.bitacora.findMany(opts);
    }
    const params = (0, pagination_1.getPaginationParams)({ page: filters.page, limit: filters.limit });
    const [data, total] = await Promise.all([
        prisma_1.prisma.bitacora.findMany({ where, orderBy, skip: params.skip, take: params.take, include }),
        prisma_1.prisma.bitacora.count({ where }),
    ]);
    return (0, pagination_1.paginatedResponse)(data, total, { page: filters.page, limit: filters.limit });
}
async function findById(id, userId) {
    const bitacora = await prisma_1.prisma.bitacora.findFirst({
        where: { id, lote: { finca: { userId } } },
        include: {
            lote: { select: { id: true, nombre: true } },
            cultivo: { select: { id: true, nombre: true } },
            producto: { select: { id: true, nombre: true } },
            user: { select: { id: true, nombre: true } },
        },
    });
    if (!bitacora)
        throw new types_1.AppError("Registro de bitácora no encontrado", 404);
    return bitacora;
}
async function createBitacora(input, userId) {
    await (0, ownership_1.verifyLoteOwnership)(input.loteId, userId);
    if (input.productoId && input.cantidad) {
        const producto = await prisma_1.prisma.producto.findUnique({ where: { id: input.productoId } });
        if (!producto)
            throw new types_1.AppError("Producto no encontrado", 404);
        if (producto.stockActual < input.cantidad) {
            throw new types_1.AppError("Stock insuficiente para el insumo solicitado");
        }
    }
    const bitacora = await prisma_1.prisma.$transaction(async (tx) => {
        if (input.productoId && input.cantidad) {
            await tx.producto.update({
                where: { id: input.productoId },
                data: { stockActual: { decrement: input.cantidad } },
            });
            await tx.movimientoInventario.create({
                data: {
                    tipo: "salida",
                    cantidad: input.cantidad,
                    motivo: `Bitácora: ${input.actividad} - ${input.descripcion}`,
                    productoId: input.productoId,
                    userId,
                },
            });
        }
        return tx.bitacora.create({
            data: {
                fecha: input.fecha,
                actividad: input.actividad,
                descripcion: input.descripcion,
                cantidad: input.cantidad ?? null,
                unidadMedida: input.unidadMedida ?? null,
                costo: input.costo,
                observaciones: input.observaciones ?? null,
                loteId: input.loteId,
                cultivoId: input.cultivoId ?? null,
                productoId: input.productoId ?? null,
                userId,
            },
            include: {
                lote: { select: { id: true, nombre: true } },
                cultivo: { select: { id: true, nombre: true } },
                producto: { select: { id: true, nombre: true } },
                user: { select: { id: true, nombre: true } },
            },
        });
    });
    return bitacora;
}
async function updateBitacora(id, input, userId) {
    const bitacora = await prisma_1.prisma.bitacora.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!bitacora)
        throw new types_1.AppError("Registro de bitácora no encontrado", 404);
    return prisma_1.prisma.bitacora.update({
        where: { id },
        data: input,
        include: {
            lote: { select: { id: true, nombre: true } },
            cultivo: { select: { id: true, nombre: true } },
            producto: { select: { id: true, nombre: true } },
            user: { select: { id: true, nombre: true } },
        },
    });
}
async function deleteBitacora(id, userId) {
    const bitacora = await prisma_1.prisma.bitacora.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!bitacora)
        throw new types_1.AppError("Registro de bitácora no encontrado", 404);
    return prisma_1.prisma.bitacora.delete({ where: { id } });
}
//# sourceMappingURL=bitacora.service.js.map