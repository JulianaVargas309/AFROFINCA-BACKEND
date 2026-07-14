import { z } from "zod";
export declare const createJornalSchema: z.ZodObject<{
    fecha: z.ZodCoercedDate<unknown>;
    horaInicio: z.ZodOptional<z.ZodString>;
    horaFin: z.ZodOptional<z.ZodString>;
    horas: z.ZodOptional<z.ZodNumber>;
    actividad: z.ZodOptional<z.ZodString>;
    tarea: z.ZodOptional<z.ZodString>;
    valorPagado: z.ZodOptional<z.ZodNumber>;
    observaciones: z.ZodOptional<z.ZodString>;
    estado: z.ZodOptional<z.ZodEnum<{
        PENDIENTE: "PENDIENTE";
        PAGADO: "PAGADO";
        ANULADO: "ANULADO";
    }>>;
    trabajadorId: z.ZodNumber;
    loteId: z.ZodNumber;
    cultivoId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateJornalSchema: z.ZodObject<{
    fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    horaInicio: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    horaFin: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    horas: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    actividad: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tarea: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    valorPagado: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    observaciones: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    estado: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        PENDIENTE: "PENDIENTE";
        PAGADO: "PAGADO";
        ANULADO: "ANULADO";
    }>>>;
    trabajadorId: z.ZodOptional<z.ZodNumber>;
    loteId: z.ZodOptional<z.ZodNumber>;
    cultivoId: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updateEstadoSchema: z.ZodObject<{
    estado: z.ZodEnum<{
        PENDIENTE: "PENDIENTE";
        PAGADO: "PAGADO";
        ANULADO: "ANULADO";
    }>;
}, z.core.$strip>;
export type CreateJornalInput = z.infer<typeof createJornalSchema>;
export type UpdateJornalInput = z.infer<typeof updateJornalSchema>;
export type UpdateEstadoInput = z.infer<typeof updateEstadoSchema>;
//# sourceMappingURL=jornales.schema.d.ts.map