"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTrabajadorSchema = exports.createTrabajadorSchema = void 0;
const zod_1 = require("zod");
exports.createTrabajadorSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    telefono: zod_1.z.string().max(20).optional(),
    direccion: zod_1.z.string().max(300).optional(),
    tipo: zod_1.z.enum(["permanente", "temporal"]).default("temporal"),
    salarioBase: zod_1.z.number().positive().optional(),
});
exports.updateTrabajadorSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    telefono: zod_1.z.string().max(20).optional(),
    direccion: zod_1.z.string().max(300).optional(),
    tipo: zod_1.z.enum(["permanente", "temporal"]).optional(),
    salarioBase: zod_1.z.number().positive().optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=trabajadores.schema.js.map