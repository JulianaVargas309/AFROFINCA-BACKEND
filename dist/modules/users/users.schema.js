"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6).max(100),
    rol: zod_1.z.enum(["admin", "encargado"]).default("encargado"),
});
exports.updateUserSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100).optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().min(6).max(100).optional(),
    rol: zod_1.z.enum(["admin", "encargado"]).optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=users.schema.js.map