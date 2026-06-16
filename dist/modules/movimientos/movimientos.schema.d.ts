import { z } from "zod";
export declare const createMovimientoSchema: z.ZodObject<{
    tipo: z.ZodEnum<{
        entrada: "entrada";
        salida: "salida";
    }>;
    cantidad: z.ZodNumber;
    motivo: z.ZodOptional<z.ZodString>;
    productoId: z.ZodNumber;
}, z.core.$strip>;
export type CreateMovimientoInput = z.infer<typeof createMovimientoSchema>;
//# sourceMappingURL=movimientos.schema.d.ts.map