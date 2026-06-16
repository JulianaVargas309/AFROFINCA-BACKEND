"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCultivoSchema = exports.createCultivoSchema = void 0;
const zod_1 = require("zod");
exports.createCultivoSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    variedad: zod_1.z.string().max(100).optional(),
    fechaSiembra: zod_1.z.coerce.date(),
    fechaCosechaEstimada: zod_1.z.coerce.date().optional(),
    cantidadSembrada: zod_1.z.number().positive().optional(),
    loteId: zod_1.z.number().int().positive(),
});
exports.updateCultivoSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    variedad: zod_1.z.string().max(100).optional(),
    fechaSiembra: zod_1.z.coerce.date().optional(),
    fechaCosechaEstimada: zod_1.z.coerce.date().optional(),
    fechaCosechaReal: zod_1.z.coerce.date().optional(),
    estado: zod_1.z.enum(["activo", "cosechado", "perdido"]).optional(),
    cantidadSembrada: zod_1.z.number().positive().optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=cultivos.schema.js.map