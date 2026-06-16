import { z } from "zod";
export declare const createProductoSchema: z.ZodObject<{
    nombre: z.ZodString;
    descripcion: z.ZodOptional<z.ZodString>;
    categoria: z.ZodOptional<z.ZodString>;
    unidadMedida: z.ZodDefault<z.ZodString>;
    stockActual: z.ZodDefault<z.ZodNumber>;
    stockMinimo: z.ZodDefault<z.ZodNumber>;
    precioUnitario: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateProductoSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodString>;
    categoria: z.ZodOptional<z.ZodString>;
    unidadMedida: z.ZodOptional<z.ZodString>;
    stockActual: z.ZodOptional<z.ZodNumber>;
    stockMinimo: z.ZodOptional<z.ZodNumber>;
    precioUnitario: z.ZodOptional<z.ZodNumber>;
    activo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateProductoInput = z.infer<typeof createProductoSchema>;
export type UpdateProductoInput = z.infer<typeof updateProductoSchema>;
//# sourceMappingURL=productos.schema.d.ts.map