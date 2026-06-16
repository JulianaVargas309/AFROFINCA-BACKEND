"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJornalSchema = exports.createJornalSchema = void 0;
const zod_1 = require("zod");
exports.createJornalSchema = zod_1.z.object({
    fecha: zod_1.z.coerce.date(),
    horas: zod_1.z.number().positive().optional(),
    tarea: zod_1.z.string().max(300).optional(),
    montoPagado: zod_1.z.number().positive().optional(),
    trabajadorId: zod_1.z.number().int().positive(),
    fincaId: zod_1.z.number().int().positive(),
});
exports.updateJornalSchema = zod_1.z.object({
    horas: zod_1.z.number().positive().optional(),
    tarea: zod_1.z.string().max(300).optional(),
    montoPagado: zod_1.z.number().positive().optional(),
});
//# sourceMappingURL=jornales.schema.js.map