import { z } from "zod";
export declare const createFincaSchema: z.ZodObject<{
    nombre: z.ZodString;
    ubicacion: z.ZodOptional<z.ZodString>;
    hectareas: z.ZodOptional<z.ZodNumber>;
    descripcion: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateFincaSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    ubicacion: z.ZodOptional<z.ZodString>;
    hectareas: z.ZodOptional<z.ZodNumber>;
    descripcion: z.ZodOptional<z.ZodString>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateFincaInput = z.infer<typeof createFincaSchema>;
export type UpdateFincaInput = z.infer<typeof updateFincaSchema>;
//# sourceMappingURL=fincas.schema.d.ts.map