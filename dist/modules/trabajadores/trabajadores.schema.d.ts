import { z } from "zod";
export declare const createTrabajadorSchema: z.ZodObject<{
    nombre: z.ZodString;
    apellido: z.ZodOptional<z.ZodString>;
    documento: z.ZodString;
    telefono: z.ZodOptional<z.ZodString>;
    correo: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    direccion: z.ZodOptional<z.ZodString>;
    fechaNacimiento: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    eps: z.ZodOptional<z.ZodString>;
    arl: z.ZodOptional<z.ZodString>;
    cargo: z.ZodOptional<z.ZodString>;
    salario: z.ZodOptional<z.ZodNumber>;
    tipo: z.ZodDefault<z.ZodString>;
    observaciones: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateTrabajadorSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    apellido: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    documento: z.ZodOptional<z.ZodString>;
    telefono: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    correo: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    direccion: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    fechaNacimiento: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    eps: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    arl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    cargo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    salario: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    tipo: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    observaciones: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateTrabajadorInput = z.infer<typeof createTrabajadorSchema>;
export type UpdateTrabajadorInput = z.infer<typeof updateTrabajadorSchema>;
//# sourceMappingURL=trabajadores.schema.d.ts.map