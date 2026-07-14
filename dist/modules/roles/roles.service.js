"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
const prisma_1 = require("../../lib/prisma");
const types_1 = require("../../types");
async function findAll() {
    return prisma_1.prisma.role.findMany({
        where: { activo: true },
        include: { permissions: { include: { permission: true } } },
        orderBy: { nombre: "asc" },
    });
}
async function findById(id) {
    const role = await prisma_1.prisma.role.findUnique({
        where: { id },
        include: { permissions: { include: { permission: true } } },
    });
    if (!role)
        throw new types_1.AppError("Rol no encontrado", 404);
    return role;
}
async function create(input) {
    const { permissionIds, ...data } = input;
    return prisma_1.prisma.role.create({
        data: {
            ...data,
            permissions: permissionIds
                ? { create: permissionIds.map((permissionId) => ({ permissionId })) }
                : undefined,
        },
        include: { permissions: { include: { permission: true } } },
    });
}
async function update(id, input) {
    const role = await prisma_1.prisma.role.findUnique({ where: { id } });
    if (!role)
        throw new types_1.AppError("Rol no encontrado", 404);
    const { permissionIds, ...data } = input;
    if (permissionIds) {
        await prisma_1.prisma.$transaction([
            prisma_1.prisma.rolePermission.deleteMany({ where: { roleId: id } }),
            ...permissionIds.map((permissionId) => prisma_1.prisma.rolePermission.create({ data: { roleId: id, permissionId } })),
        ]);
    }
    return prisma_1.prisma.role.update({
        where: { id },
        data,
        include: { permissions: { include: { permission: true } } },
    });
}
async function remove(id) {
    const role = await prisma_1.prisma.role.findUnique({ where: { id } });
    if (!role)
        throw new types_1.AppError("Rol no encontrado", 404);
    return prisma_1.prisma.role.update({
        where: { id },
        data: { activo: false },
    });
}
//# sourceMappingURL=roles.service.js.map