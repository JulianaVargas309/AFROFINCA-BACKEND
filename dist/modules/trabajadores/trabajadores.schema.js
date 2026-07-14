"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTrabajadorSchema = exports.createTrabajadorSchema = void 0;
const zod_1 = require("zod");
exports.createTrabajadorSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100),
    apellido: zod_1.z.string().max(100).optional(),
    documento: zod_1.z.string().min(5).max(20),
    telefono: zod_1.z.string().max(20).optional(),
    correo: zod_1.z.string().email().optional().or(zod_1.z.literal("")),
    direccion: zod_1.z.string().max(200).optional(),
    fechaNacimiento: zod_1.z.coerce.date().optional(),
    eps: zod_1.z.string().max(100).optional(),
    arl: zod_1.z.string().max(100).optional(),
    cargo: zod_1.z.string().max(100).optional(),
    salario: zod_1.z.number().positive().optional(),
    tipo: zod_1.z.string().default("temporal"),
    observaciones: zod_1.z.string().max(500).optional(),
});
exports.updateTrabajadorSchema = exports.createTrabajadorSchema.partial();
//# sourceMappingURL=trabajadores.schema.js.map