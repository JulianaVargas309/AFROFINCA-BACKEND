"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProveedorSchema = exports.createProveedorSchema = void 0;
const zod_1 = require("zod");
exports.createProveedorSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    telefono: zod_1.z.string().max(20).optional(),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    direccion: zod_1.z.string().max(300).optional(),
});
exports.updateProveedorSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    telefono: zod_1.z.string().max(20).optional(),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    direccion: zod_1.z.string().max(300).optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=proveedores.schema.js.map