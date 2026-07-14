import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    documento: z.ZodString;
    password: z.ZodString;
    rol: z.ZodDefault<z.ZodEnum<{
        ADMIN: "ADMIN";
        FAMILIAR: "FAMILIAR";
        CONSULTA: "CONSULTA";
    }>>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    apellido: z.ZodOptional<z.ZodString>;
    correo: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    telefono: z.ZodOptional<z.ZodString>;
    foto: z.ZodOptional<z.ZodString>;
    roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const changePasswordSchema: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export declare const changeRolSchema: z.ZodObject<{
    rol: z.ZodEnum<{
        ADMIN: "ADMIN";
        FAMILIAR: "FAMILIAR";
        CONSULTA: "CONSULTA";
    }>;
    roleId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type ChangeRolInput = z.infer<typeof changeRolSchema>;
//# sourceMappingURL=users.schema.d.ts.map