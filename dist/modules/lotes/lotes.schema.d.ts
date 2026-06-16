import { z } from "zod";
export declare const createLoteSchema: z.ZodObject<{
    nombre: z.ZodString;
    area: z.ZodOptional<z.ZodNumber>;
    descripcion: z.ZodOptional<z.ZodString>;
    fincaId: z.ZodNumber;
}, z.core.$strip>;
export declare const updateLoteSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    area: z.ZodOptional<z.ZodNumber>;
    descripcion: z.ZodOptional<z.ZodString>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateLoteInput = z.infer<typeof createLoteSchema>;
export type UpdateLoteInput = z.infer<typeof updateLoteSchema>;
//# sourceMappingURL=lotes.schema.d.ts.map