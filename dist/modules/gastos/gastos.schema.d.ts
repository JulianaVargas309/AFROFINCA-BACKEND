import { z } from "zod";
export declare const createGastroSchema: z.ZodObject<{
    descripcion: z.ZodString;
    monto: z.ZodNumber;
    categoria: z.ZodOptional<z.ZodString>;
    fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    proveedorId: z.ZodOptional<z.ZodNumber>;
    cultivoId: z.ZodOptional<z.ZodNumber>;
    fincaId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateGastroSchema: z.ZodObject<{
    descripcion: z.ZodOptional<z.ZodString>;
    monto: z.ZodOptional<z.ZodNumber>;
    categoria: z.ZodOptional<z.ZodString>;
    fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    proveedorId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    cultivoId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    fincaId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export type CreateGastoInput = z.infer<typeof createGastroSchema>;
export type UpdateGastoInput = z.infer<typeof updateGastroSchema>;
//# sourceMappingURL=gastos.schema.d.ts.map