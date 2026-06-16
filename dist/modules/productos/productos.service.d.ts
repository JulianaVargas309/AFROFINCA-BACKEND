import { CreateProductoInput, UpdateProductoInput } from "./productos.schema";
export declare function findAll(page?: number, limit?: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    categoria: string | null;
    unidadMedida: string;
    stockActual: number;
    stockMinimo: number;
    precioUnitario: number | null;
}[] | import("../../lib/pagination").PaginatedResponse<{
    nombre: string;
    createdAt: Date;
    id: number;
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
    nombre: string;
    createdAt: Date;
    id: number;
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
    nombre: string;
    createdAt: Date;
    id: number;
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
    nombre: string;
    createdAt: Date;
    id: number;
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
    nombre: string;
    createdAt: Date;
    id: number;
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