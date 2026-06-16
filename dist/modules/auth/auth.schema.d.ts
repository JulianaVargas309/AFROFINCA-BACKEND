import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    nombre: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    rol: z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        encargado: "encargado";
    }>>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const refreshSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RefreshInput = z.infer<typeof refreshSchema>;
//# sourceMappingURL=auth.schema.d.ts.map