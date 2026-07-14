"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVentaSchema = exports.createVentaSchema = exports.detalleVentaSchema = void 0;
const zod_1 = require("zod");
exports.detalleVentaSchema = zod_1.z.object({
    productoId: zod_1.z.number().int().positive(),
    cantidad: zod_1.z.number().positive(),
    precioUnitario: zod_1.z.number().positive(),
});
exports.createVentaSchema = zod_1.z.object({
    clienteId: zod_1.z.number().int().positive(),
    detalles: zod_1.z.array(exports.detalleVentaSchema).min(1),
});
exports.updateVentaSchema = zod_1.z.object({
    estado: zod_1.z.enum(["PENDIENTE", "COMPLETADA", "ANULADA"]),
});
//# sourceMappingURL=ventas.schema.js.map