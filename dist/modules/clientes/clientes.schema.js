"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClienteSchema = exports.createClienteSchema = void 0;
const zod_1 = require("zod");
exports.createClienteSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    telefono: zod_1.z.string().max(20).optional(),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    direccion: zod_1.z.string().max(300).optional(),
});
exports.updateClienteSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    telefono: zod_1.z.string().max(20).optional(),
    email: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    direccion: zod_1.z.string().max(300).optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=clientes.schema.js.map