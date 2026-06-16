"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFincaSchema = exports.createFincaSchema = void 0;
const zod_1 = require("zod");
exports.createFincaSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    ubicacion: zod_1.z.string().max(300).optional(),
    hectareas: zod_1.z.number().positive().optional(),
    descripcion: zod_1.z.string().max(500).optional(),
});
exports.updateFincaSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    ubicacion: zod_1.z.string().max(300).optional(),
    hectareas: zod_1.z.number().positive().optional(),
    descripcion: zod_1.z.string().max(500).optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=fincas.schema.js.map