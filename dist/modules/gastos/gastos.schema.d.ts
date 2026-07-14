import { z } from "zod";
export declare const createGastoSchema: z.ZodObject<{
    descripcion: z.ZodString;
    monto: z.ZodNumber;
    categoria: z.ZodOptional<z.ZodEnum<{
        INSUMOS: "INSUMOS";
        MANO_DE_OBRA: "MANO_DE_OBRA";
        MANTENIMIENTO: "MANTENIMIENTO";
        TRANSPORTE: "TRANSPORTE";
        ADMINISTRACION: "ADMINISTRACION";
        OTRO: "OTRO";
    }>>;
    fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    proveedorId: z.ZodOptional<z.ZodNumber>;
    cultivoId: z.ZodOptional<z.ZodNumber>;
    fincaId: z.ZodOptional<z.ZodNumber>;
    loteId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateGastoSchema: z.ZodObject<{
    descripcion: z.ZodOptional<z.ZodString>;
    monto: z.ZodOptional<z.ZodNumber>;
    categoria: z.ZodOptional<z.ZodEnum<{
        INSUMOS: "INSUMOS";
        MANO_DE_OBRA: "MANO_DE_OBRA";
        MANTENIMIENTO: "MANTENIMIENTO";
        TRANSPORTE: "TRANSPORTE";
        ADMINISTRACION: "ADMINISTRACION";
        OTRO: "OTRO";
    }>>;
    fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    proveedorId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    cultivoId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    fincaId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    loteId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export type CreateGastoInput = z.infer<typeof createGastoSchema>;
export type UpdateGastoInput = z.infer<typeof updateGastoSchema>;
//# sourceMappingURL=gastos.schema.d.ts.map