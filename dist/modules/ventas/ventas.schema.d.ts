import { z } from "zod";
export declare const detalleVentaSchema: z.ZodObject<{
    productoId: z.ZodNumber;
    cantidad: z.ZodNumber;
    precioUnitario: z.ZodNumber;
}, z.core.$strip>;
export declare const createVentaSchema: z.ZodObject<{
    clienteId: z.ZodNumber;
    detalles: z.ZodArray<z.ZodObject<{
        productoId: z.ZodNumber;
        cantidad: z.ZodNumber;
        precioUnitario: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const updateVentaSchema: z.ZodObject<{
    estado: z.ZodEnum<{
        PENDIENTE: "PENDIENTE";
        COMPLETADA: "COMPLETADA";
        ANULADA: "ANULADA";
    }>;
}, z.core.$strip>;
export type CreateVentaInput = z.infer<typeof createVentaSchema>;
export type UpdateVentaInput = z.infer<typeof updateVentaSchema>;
//# sourceMappingURL=ventas.schema.d.ts.map