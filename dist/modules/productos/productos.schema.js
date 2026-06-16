"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductoSchema = exports.createProductoSchema = void 0;
const zod_1 = require("zod");
exports.createProductoSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    descripcion: zod_1.z.string().max(500).optional(),
    categoria: zod_1.z.string().max(100).optional(),
    unidadMedida: zod_1.z.string().max(50).default("unidad"),
    stockActual: zod_1.z.number().min(0).default(0),
    stockMinimo: zod_1.z.number().min(0).default(0),
    precioUnitario: zod_1.z.number().positive().optional(),
});
exports.updateProductoSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    descripcion: zod_1.z.string().max(500).optional(),
    categoria: zod_1.z.string().max(100).optional(),
    unidadMedida: zod_1.z.string().max(50).optional(),
    stockActual: zod_1.z.number().min(0).optional(),
    stockMinimo: zod_1.z.number().min(0).optional(),
    precioUnitario: zod_1.z.number().positive().optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=productos.schema.js.map