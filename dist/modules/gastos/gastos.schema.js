"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGastoSchema = exports.createGastoSchema = void 0;
const zod_1 = require("zod");
exports.createGastoSchema = zod_1.z.object({
    descripcion: zod_1.z.string().min(2).max(500),
    monto: zod_1.z.number().positive(),
    categoria: zod_1.z
        .enum(["INSUMOS", "MANO_DE_OBRA", "MANTENIMIENTO", "TRANSPORTE", "ADMINISTRACION", "OTRO"])
        .optional(),
    fecha: zod_1.z.coerce.date().optional(),
    proveedorId: zod_1.z.number().int().positive().optional(),
    cultivoId: zod_1.z.number().int().positive().optional(),
    fincaId: zod_1.z.number().int().positive().optional(),
    loteId: zod_1.z.number().int().positive().optional(),
});
exports.updateGastoSchema = zod_1.z.object({
    descripcion: zod_1.z.string().min(2).max(500).optional(),
    monto: zod_1.z.number().positive().optional(),
    categoria: zod_1.z
        .enum(["INSUMOS", "MANO_DE_OBRA", "MANTENIMIENTO", "TRANSPORTE", "ADMINISTRACION", "OTRO"])
        .optional(),
    fecha: zod_1.z.coerce.date().optional(),
    proveedorId: zod_1.z.number().int().positive().optional().nullable(),
    cultivoId: zod_1.z.number().int().positive().optional().nullable(),
    fincaId: zod_1.z.number().int().positive().optional().nullable(),
    loteId: zod_1.z.number().int().positive().optional().nullable(),
});
//# sourceMappingURL=gastos.schema.js.map