import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    documento: z.ZodString;
    rol: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        FAMILIAR: "FAMILIAR";
        CONSULTA: "CONSULTA";
    }>>>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    documento: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const refreshSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RefreshInput = z.infer<typeof refreshSchema>;
//# sourceMappingURL=auth.schema.d.ts.map