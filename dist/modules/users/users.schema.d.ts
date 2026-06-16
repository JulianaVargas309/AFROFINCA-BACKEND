import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    nombre: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    rol: z.ZodDefault<z.ZodEnum<{
        admin: "admin";
        encargado: "encargado";
    }>>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    rol: z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        encargado: "encargado";
    }>>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
//# sourceMappingURL=users.schema.d.ts.map