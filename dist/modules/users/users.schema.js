"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRolSchema = exports.changePasswordSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100).optional(),
    documento: zod_1.z.string().min(1),
    password: zod_1.z.string().min(6).max(100),
    rol: zod_1.z.enum(["ADMIN", "FAMILIAR", "CONSULTA"]).default("FAMILIAR"),
});
exports.updateUserSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100).optional(),
    apellido: zod_1.z.string().max(100).optional(),
    correo: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    telefono: zod_1.z.string().max(20).optional(),
    foto: zod_1.z.string().optional(),
    roleId: zod_1.z.number().int().positive().optional().nullable(),
    activo: zod_1.z.boolean().optional(),
});
exports.changePasswordSchema = zod_1.z.object({
    currentPassword: zod_1.z.string().min(1),
    newPassword: zod_1.z.string().min(6).max(100),
});
exports.changeRolSchema = zod_1.z.object({
    rol: zod_1.z.enum(["ADMIN", "FAMILIAR", "CONSULTA"]),
    roleId: zod_1.z.number().int().positive().optional(),
});
//# sourceMappingURL=users.schema.js.map