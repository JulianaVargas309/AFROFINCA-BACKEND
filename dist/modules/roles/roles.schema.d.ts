import { z } from "zod";
export declare const createRoleSchema: z.ZodObject<{
    nombre: z.ZodString;
    descripcion: z.ZodOptional<z.ZodString>;
    nivel: z.ZodDefault<z.ZodNumber>;
    permissionIds: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updateRoleSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nivel: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    permissionIds: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
}, z.core.$strip>;
export type CreateRoleInput = z.infer<typeof createRoleSchema>;
export type UpdateRoleInput = z.infer<typeof updateRoleSchema>;
//# sourceMappingURL=roles.schema.d.ts.map