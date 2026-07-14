import { z } from "zod";
export declare const createBitacoraSchema: z.ZodObject<{
    fecha: z.ZodCoercedDate<unknown>;
    actividad: z.ZodEnum<{
        MANTENIMIENTO: "MANTENIMIENTO";
        OTRO: "OTRO";
        FERTILIZACION: "FERTILIZACION";
        FUMIGACION: "FUMIGACION";
        PODA: "PODA";
        DESHIERBE: "DESHIERBE";
        COSECHA: "COSECHA";
        SIEMBRA: "SIEMBRA";
    }>;
    descripcion: z.ZodString;
    cantidad: z.ZodOptional<z.ZodNumber>;
    unidadMedida: z.ZodOptional<z.ZodString>;
    costo: z.ZodDefault<z.ZodNumber>;
    observaciones: z.ZodOptional<z.ZodString>;
    loteId: z.ZodNumber;
    cultivoId: z.ZodOptional<z.ZodNumber>;
    productoId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateBitacoraSchema: z.ZodObject<{
    fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    actividad: z.ZodOptional<z.ZodEnum<{
        MANTENIMIENTO: "MANTENIMIENTO";
        OTRO: "OTRO";
        FERTILIZACION: "FERTILIZACION";
        FUMIGACION: "FUMIGACION";
        PODA: "PODA";
        DESHIERBE: "DESHIERBE";
        COSECHA: "COSECHA";
        SIEMBRA: "SIEMBRA";
    }>>;
    descripcion: z.ZodOptional<z.ZodString>;
    cantidad: z.ZodOptional<z.ZodNumber>;
    unidadMedida: z.ZodOptional<z.ZodString>;
    costo: z.ZodOptional<z.ZodNumber>;
    observaciones: z.ZodOptional<z.ZodString>;
    cultivoId: z.ZodOptional<z.ZodNumber>;
    productoId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateBitacoraInput = z.infer<typeof createBitacoraSchema>;
export type UpdateBitacoraInput = z.infer<typeof updateBitacoraSchema>;
//# sourceMappingURL=bitacora.schema.d.ts.map