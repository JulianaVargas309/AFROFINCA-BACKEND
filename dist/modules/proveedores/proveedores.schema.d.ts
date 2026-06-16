import { z } from "zod";
export declare const createProveedorSchema: z.ZodObject<{
    nombre: z.ZodString;
    telefono: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    direccion: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateProveedorSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    telefono: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    direccion: z.ZodOptional<z.ZodString>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateProveedorInput = z.infer<typeof createProveedorSchema>;
export type UpdateProveedorInput = z.infer<typeof updateProveedorSchema>;
//# sourceMappingURL=proveedores.schema.d.ts.map