import { z } from "zod";
export declare const createJornalSchema: z.ZodObject<{
    fecha: z.ZodCoercedDate<unknown>;
    horas: z.ZodOptional<z.ZodNumber>;
    tarea: z.ZodOptional<z.ZodString>;
    montoPagado: z.ZodOptional<z.ZodNumber>;
    trabajadorId: z.ZodNumber;
    fincaId: z.ZodNumber;
}, z.core.$strip>;
export declare const updateJornalSchema: z.ZodObject<{
    horas: z.ZodOptional<z.ZodNumber>;
    tarea: z.ZodOptional<z.ZodString>;
    montoPagado: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateJornalInput = z.infer<typeof createJornalSchema>;
export type UpdateJornalInput = z.infer<typeof updateJornalSchema>;
//# sourceMappingURL=jornales.schema.d.ts.map