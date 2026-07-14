import { z } from "zod";
export declare const createPermissionSchema: z.ZodObject<{
    nombre: z.ZodString;
    descripcion: z.ZodOptional<z.ZodString>;
    modulo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updatePermissionSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    modulo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreatePermissionInput = z.infer<typeof createPermissionSchema>;
export type UpdatePermissionInput = z.infer<typeof updatePermissionSchema>;
//# sourceMappingURL=permissions.schema.d.ts.map