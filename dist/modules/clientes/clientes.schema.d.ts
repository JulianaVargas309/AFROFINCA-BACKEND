import { z } from "zod";
export declare const createClienteSchema: z.ZodObject<{
    nombre: z.ZodString;
    telefono: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    direccion: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateClienteSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    telefono: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    direccion: z.ZodOptional<z.ZodString>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateClienteInput = z.infer<typeof createClienteSchema>;
export type UpdateClienteInput = z.infer<typeof updateClienteSchema>;
//# sourceMappingURL=clientes.schema.d.ts.map