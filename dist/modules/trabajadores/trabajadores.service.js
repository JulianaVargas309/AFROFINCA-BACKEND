"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.createTrabajador = createTrabajador;
exports.updateTrabajador = updateTrabajador;
exports.deactivateTrabajador = deactivateTrabajador;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll() {
    return prisma_1.prisma.trabajador.findMany({
        where: { activo: true },
        orderBy: { nombre: "asc" },
    });
}
async function findById(id) {
    const trabajador = await prisma_1.prisma.trabajador.findUnique({ where: { id } });
    if (!trabajador)
        throw new types_1.AppError("Trabajador no encontrado", 404);
    return trabajador;
}
async function createTrabajador(input) {
    return prisma_1.prisma.trabajador.create({ data: input });
}
async function updateTrabajador(id, input) {
    const trabajador = await prisma_1.prisma.trabajador.findUnique({ where: { id } });
    if (!trabajador)
        throw new types_1.AppError("Trabajador no encontrado", 404);
    return prisma_1.prisma.trabajador.update({ where: { id }, data: input });
}
async function deactivateTrabajador(id) {
    const trabajador = await prisma_1.prisma.trabajador.findUnique({ where: { id } });
    if (!trabajador)
        throw new types_1.AppError("Trabajador no encontrado", 404);
    return prisma_1.prisma.trabajador.update({ where: { id }, data: { activo: false } });
}
//# sourceMappingURL=trabajadores.service.js.map