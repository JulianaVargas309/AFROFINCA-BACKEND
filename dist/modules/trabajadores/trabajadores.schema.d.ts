import { z } from "zod";
export declare const createTrabajadorSchema: z.ZodObject<{
    nombre: z.ZodString;
    telefono: z.ZodOptional<z.ZodString>;
    direccion: z.ZodOptional<z.ZodString>;
    tipo: z.ZodDefault<z.ZodEnum<{
        permanente: "permanente";
        temporal: "temporal";
    }>>;
    salarioBase: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateTrabajadorSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    telefono: z.ZodOptional<z.ZodString>;
    direccion: z.ZodOptional<z.ZodString>;
    tipo: z.ZodOptional<z.ZodEnum<{
        permanente: "permanente";
        temporal: "temporal";
    }>>;
    salarioBase: z.ZodOptional<z.ZodNumber>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateTrabajadorInput = z.infer<typeof createTrabajadorSchema>;
export type UpdateTrabajadorInput = z.infer<typeof updateTrabajadorSchema>;
//# sourceMappingURL=trabajadores.schema.d.ts.map