"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createJornal = createJornal;
exports.updateJornal = updateJornal;
exports.deleteJornal = deleteJornal;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function verifyFincaOwnership(fincaId, userId) {
    const finca = await prisma_1.prisma.finca.findFirst({
        where: { id: fincaId, userId },
    });
    if (!finca)
        throw new types_1.AppError("Finca no encontrada", 404);
    return finca;
}
async function findAll(trabajadorId, userId) {
    return prisma_1.prisma.jornal.findMany({
        where: { trabajadorId, finca: { userId } },
        orderBy: { fecha: "desc" },
        include: { finca: { select: { id: true, nombre: true } } },
    });
}
async function findById(id, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, finca: { userId } },
        include: {
            trabajador: { select: { id: true, nombre: true } },
            finca: { select: { id: true, nombre: true } },
        },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return jornal;
}
async function createJornal(input, userId) {
    await verifyFincaOwnership(input.fincaId, userId);
    const trabajador = await prisma_1.prisma.trabajador.findUnique({
        where: { id: input.trabajadorId },
    });
    if (!trabajador)
        throw new types_1.AppError("Trabajador no encontrado", 404);
    return prisma_1.prisma.jornal.create({ data: input });
}
async function updateJornal(id, input, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, finca: { userId } },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return prisma_1.prisma.jornal.update({ where: { id }, data: input });
}
async function deleteJornal(id, userId) {
    const jornal = await prisma_1.prisma.jornal.findFirst({
        where: { id, finca: { userId } },
    });
    if (!jornal)
        throw new types_1.AppError("Jornal no encontrado", 404);
    return prisma_1.prisma.jornal.delete({ where: { id } });
}
//# sourceMappingURL=jornales.service.js.map