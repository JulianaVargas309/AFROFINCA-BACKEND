import { z } from "zod";
export declare const createCultivoSchema: z.ZodObject<{
    tipo: z.ZodEnum<{
        CAFE: "CAFE";
        CANA_AZUCAR: "CANA_AZUCAR";
    }>;
    nombre: z.ZodString;
    variedad: z.ZodOptional<z.ZodString>;
    fechaSiembra: z.ZodCoercedDate<unknown>;
    fechaCosechaEstimada: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    cantidadSembrada: z.ZodOptional<z.ZodNumber>;
    numeroSoca: z.ZodOptional<z.ZodNumber>;
    edadCafetal: z.ZodOptional<z.ZodNumber>;
    plantasPorHectarea: z.ZodOptional<z.ZodNumber>;
    rendimientoEstimado: z.ZodOptional<z.ZodNumber>;
    loteId: z.ZodNumber;
}, z.core.$strip>;
export declare const updateCultivoSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    variedad: z.ZodOptional<z.ZodString>;
    fechaSiembra: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    fechaCosechaEstimada: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    fechaCosechaReal: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    estado: z.ZodOptional<z.ZodEnum<{
        ACTIVO: "ACTIVO";
        COSECHADO: "COSECHADO";
        PERDIDO: "PERDIDO";
    }>>;
    cantidadSembrada: z.ZodOptional<z.ZodNumber>;
    numeroSoca: z.ZodOptional<z.ZodNumber>;
    edadCafetal: z.ZodOptional<z.ZodNumber>;
    plantasPorHectarea: z.ZodOptional<z.ZodNumber>;
    rendimientoEstimado: z.ZodOptional<z.ZodNumber>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateCultivoInput = z.infer<typeof createCultivoSchema>;
export type UpdateCultivoInput = z.infer<typeof updateCultivoSchema>;
//# sourceMappingURL=cultivos.schema.d.ts.map