"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEstadoSchema = exports.updateJornalSchema = exports.createJornalSchema = void 0;
const zod_1 = require("zod");
exports.createJornalSchema = zod_1.z.object({
    fecha: zod_1.z.coerce.date(),
    horaInicio: zod_1.z.string().optional(),
    horaFin: zod_1.z.string().optional(),
    horas: zod_1.z.number().positive().optional(),
    actividad: zod_1.z.string().max(200).optional(),
    tarea: zod_1.z.string().max(300).optional(),
    valorPagado: zod_1.z.number().positive().optional(),
    observaciones: zod_1.z.string().max(500).optional(),
    estado: zod_1.z.enum(["PENDIENTE", "PAGADO", "ANULADO"]).optional(),
    trabajadorId: zod_1.z.number().int().positive(),
    loteId: zod_1.z.number().int().positive(),
    cultivoId: zod_1.z.number().int().positive().optional(),
});
exports.updateJornalSchema = exports.createJornalSchema.partial();
exports.updateEstadoSchema = zod_1.z.object({
    estado: zod_1.z.enum(["PENDIENTE", "PAGADO", "ANULADO"]),
});
//# sourceMappingURL=jornales.schema.js.map