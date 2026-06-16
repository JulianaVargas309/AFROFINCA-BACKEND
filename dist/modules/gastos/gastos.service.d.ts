import { CreateGastoInput, UpdateGastoInput } from "./gastos.schema";
export declare function findAll(userId: number, page?: number, limit?: number): Promise<({
    finca: {
        nombre: string;
        id: number;
    } | null;
    cultivo: {
        nombre: string;
        id: number;
    } | null;
    proveedor: {
        nombre: string;
        id: number;
    } | null;
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    categoria: string | null;
    fecha: Date;
    monto: number;
    proveedorId: number | null;
    cultivoId: number | null;
})[] | import("../../lib/pagination").PaginatedResponse<{
    finca: {
        nombre: string;
        id: number;
    } | null;
    cultivo: {
        nombre: string;
        id: number;
    } | null;
    proveedor: {
        nombre: string;
        id: number;
    } | null;
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    categoria: string | null;
    fecha: Date;
    monto: number;
    proveedorId: number | null;
    cultivoId: number | null;
}>>;
export declare function findById(id: number, userId: number): Promise<{
    finca: {
        nombre: string;
        id: number;
    } | null;
    cultivo: {
        nombre: string;
        id: number;
    } | null;
    proveedor: {
        nombre: string;
        id: number;
    } | null;
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    categoria: string | null;
    fecha: Date;
    monto: number;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
export declare function createGasto(input: CreateGastoInput, userId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    categoria: string | null;
    fecha: Date;
    monto: number;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
export declare function updateGasto(id: number, input: UpdateGastoInput, userId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    categoria: string | null;
    fecha: Date;
    monto: number;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
export declare function deleteGasto(id: number, userId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    fincaId: number | null;
    categoria: string | null;
    fecha: Date;
    monto: number;
    proveedorId: number | null;
    cultivoId: number | null;
}>;
//# sourceMappingURL=gastos.service.d.ts.map