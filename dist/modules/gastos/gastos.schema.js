"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGastroSchema = exports.createGastroSchema = void 0;
const zod_1 = require("zod");
exports.createGastroSchema = zod_1.z.object({
    descripcion: zod_1.z.string().min(2).max(500),
    monto: zod_1.z.number().positive(),
    categoria: zod_1.z.string().max(100).optional(),
    fecha: zod_1.z.coerce.date().optional(),
    proveedorId: zod_1.z.number().int().positive().optional(),
    cultivoId: zod_1.z.number().int().positive().optional(),
    fincaId: zod_1.z.number().int().positive().optional(),
});
exports.updateGastroSchema = zod_1.z.object({
    descripcion: zod_1.z.string().min(2).max(500).optional(),
    monto: zod_1.z.number().positive().optional(),
    categoria: zod_1.z.string().max(100).optional(),
    fecha: zod_1.z.coerce.date().optional(),
    proveedorId: zod_1.z.number().int().positive().optional().nullable(),
    cultivoId: zod_1.z.number().int().positive().optional().nullable(),
    fincaId: zod_1.z.number().int().positive().optional().nullable(),
});
//# sourceMappingURL=gastos.schema.js.map