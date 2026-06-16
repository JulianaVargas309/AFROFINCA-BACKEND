"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovimientoSchema = void 0;
const zod_1 = require("zod");
exports.createMovimientoSchema = zod_1.z.object({
    tipo: zod_1.z.enum(["entrada", "salida"]),
    cantidad: zod_1.z.number().positive(),
    motivo: zod_1.z.string().max(300).optional(),
    productoId: zod_1.z.number().int().positive(),
});
//# sourceMappingURL=movimientos.schema.js.map