"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLoteSchema = exports.createLoteSchema = void 0;
const zod_1 = require("zod");
exports.createLoteSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200),
    area: zod_1.z.number().positive().optional(),
    descripcion: zod_1.z.string().max(500).optional(),
    fincaId: zod_1.z.number().int().positive(),
});
exports.updateLoteSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(200).optional(),
    area: zod_1.z.number().positive().optional(),
    descripcion: zod_1.z.string().max(500).optional(),
    activo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=lotes.schema.js.map