"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBitacoraSchema = exports.createBitacoraSchema = void 0;
const zod_1 = require("zod");
exports.createBitacoraSchema = zod_1.z.object({
    fecha: zod_1.z.coerce.date(),
    actividad: zod_1.z.enum([
        "FERTILIZACION",
        "FUMIGACION",
        "PODA",
        "DESHIERBE",
        "COSECHA",
        "SIEMBRA",
        "MANTENIMIENTO",
        "OTRO",
    ]),
    descripcion: zod_1.z.string().min(2).max(1000),
    cantidad: zod_1.z.number().positive().optional(),
    unidadMedida: zod_1.z.string().max(20).optional(),
    costo: zod_1.z.number().min(0).default(0),
    observaciones: zod_1.z.string().max(1000).optional(),
    loteId: zod_1.z.number().int().positive(),
    cultivoId: zod_1.z.number().int().positive().optional(),
    productoId: zod_1.z.number().int().positive().optional(),
});
exports.updateBitacoraSchema = zod_1.z.object({
    fecha: zod_1.z.coerce.date().optional(),
    actividad: zod_1.z
        .enum([
        "FERTILIZACION",
        "FUMIGACION",
        "PODA",
        "DESHIERBE",
        "COSECHA",
        "SIEMBRA",
        "MANTENIMIENTO",
        "OTRO",
    ])
        .optional(),
    descripcion: zod_1.z.string().min(2).max(1000).optional(),
    cantidad: zod_1.z.number().positive().optional(),
    unidadMedida: zod_1.z.string().max(20).optional(),
    costo: zod_1.z.number().min(0).optional(),
    observaciones: zod_1.z.string().max(1000).optional(),
    cultivoId: zod_1.z.number().int().positive().optional(),
    productoId: zod_1.z.number().int().positive().optional(),
});
//# sourceMappingURL=bitacora.schema.js.map