"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createJornal = createJornal;
exports.updateJornal = updateJornal;
exports.deleteJornal = deleteJornal;
exports.findByTrabajador = findByTrabajador;
exports.updateEstado = updateEstado;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
const ownership_1 = require("../../lib/ownership");
async function findAll(loteId, userId) {
    const where = {
        lote: { finca: { userId } },
    };
    if (loteId) {
        where.loteId = loteId;
    }
    return prisma_1.prisma.jornal.findMany({
        where,
        orderBy: { fecha: "desc" },
        include: {
            trabajador: { select: { id: true, nombre: true } },
            lote: { select: { id: true, nombre: true } },
        },
    });
}
async function findById(id, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, lote: { finca: { userId } } },
        include: {
            trabajador: { select: { id: true, nombre: true } },
            lote: { select: { id: true, nombre: true } },
        },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return jornal;
}
async function createJornal(input, userId) {
    await (0, ownership_1.verifyLoteOwnership)(input.loteId, userId);
    const trabajador = await prisma_1.prisma.trabajador.findUnique({
        where: { id: input.trabajadorId },
    });
    if (!trabajador)
        throw new types_1.AppError("Trabajador no encontrado", 404);
    return prisma_1.prisma.jornal.create({ data: input });
}
async function updateJornal(id, input, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return prisma_1.prisma.jornal.update({ where: { id }, data: input });
}
async function deleteJornal(id, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return prisma_1.prisma.jornal.delete({ where: { id } });
}
async function findByTrabajador(trabajadorId, userId) {
    return prisma_1.prisma.jornal.findMany({
        where: {
            trabajadorId,
            lote: { finca: { userId } },
        },
        orderBy: { fecha: "desc" },
        include: {
            trabajador: { select: { id: true, nombre: true } },
            lote: { select: { id: true, nombre: true } },
        },
    });
}
async function updateEstado(id, estado, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, lote: { finca: { userId } } },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return prisma_1.prisma.jornal.update({
        where: { id },
        data: { estado: estado },
    });
}
//# sourceMappingURL=jornales.service.js.map