import { CreateProductoInput, UpdateProductoInput } from "./productos.schema";
export declare function findAll(page?: number, limit?: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}[] | import("../../lib/pagination").PaginatedResponse<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}>>;
export declare function findById(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}>;
export declare function createProducto(input: CreateProductoInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}>;
export declare function updateProducto(id: number, input: UpdateProductoInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}>;
export declare function deactivateProducto(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}>;
//# sourceMappingURL=productos.service.d.ts.map