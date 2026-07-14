import { CreateGastoInput, UpdateGastoInput } from "./gastos.schema";
export declare function findAll(userId: number, page?: number, limit?: number): Promise<({
    finca: {
        id: number;
        nombre: string;
    } | null;
    lote: {
        id: number;
        nombre: string;
    } | null;
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    proveedor: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    loteId: number | null;
    monto: number;
    categoria: import("../../generated/prisma/enums").CategoriaGasto | null;
    fecha: Date;
    proveedorId: number | null;
    cultivoId: number | null;
})[] | import("../../lib/pagination").PaginatedResponse<{
    finca: {
        id: number;
        nombre: string;
    } | null;
    lote: {
        id: number;
        nombre: string;
    } | null;
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    proveedor: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    loteId: number | null;
    monto: number;
    categoria: import("../../generated/prisma/enums").CategoriaGasto | null;
    fecha: Date;
    proveedorId: number | null;
    cultivoId: number | null;
}>>;
export declare function findById(id: number, userId: number): Promise<{
    finca: {
        id: number;
        nombre: string;
    } | null;
    lote: {
        id: number;
        nombre: string;
    } | null;
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    proveedor: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    loteId: number | null;
    monto: number;
    categoria: import("../../generated/prisma/enums").CategoriaGasto | null;
    fecha: Date;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
export declare function createGasto(input: CreateGastoInput, userId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    loteId: number | null;
    monto: number;
    categoria: import("../../generated/prisma/enums").CategoriaGasto | null;
    fecha: Date;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
export declare function updateGasto(id: number, input: UpdateGastoInput, userId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    loteId: number | null;
    monto: number;
    categoria: import("../../generated/prisma/enums").CategoriaGasto | null;
    fecha: Date;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
export declare function deleteGasto(id: number, userId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    loteId: number | null;
    monto: number;
    categoria: import("../../generated/prisma/enums").CategoriaGasto | null;
    fecha: Date;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
//# sourceMappingURL=gastos.service.d.ts.map