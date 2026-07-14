import { CreateBitacoraInput, UpdateBitacoraInput } from "./bitacora.schema";
export declare function findAll(userId: number, filters: {
    loteId?: number;
    cultivoId?: number;
    fechaDesde?: string;
    fechaHasta?: string;
    actividad?: string;
    page?: number;
    limit?: number;
}): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    loteId: number;
    fecha: Date;
    cultivoId: number | null;
    unidadMedida: string | null;
    cantidad: number | null;
    productoId: number | null;
    observaciones: string | null;
    actividad: import("../../generated/prisma/enums").ActividadBitacora;
    costo: number;
}[] | import("../../lib/pagination").PaginatedResponse<{
    user: {
        id: number;
        nombre: string | null;
    };
    lote: {
        id: number;
        nombre: string;
    };
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    producto: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    loteId: number;
    fecha: Date;
    cultivoId: number | null;
    unidadMedida: string | null;
    cantidad: number | null;
    productoId: number | null;
    observaciones: string | null;
    actividad: import("../../generated/prisma/enums").ActividadBitacora;
    costo: number;
}>>;
export declare function findById(id: number, userId: number): Promise<{
    user: {
        id: number;
        nombre: string | null;
    };
    lote: {
        id: number;
        nombre: string;
    };
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    producto: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    loteId: number;
    fecha: Date;
    cultivoId: number | null;
    unidadMedida: string | null;
    cantidad: number | null;
    productoId: number | null;
    observaciones: string | null;
    actividad: import("../../generated/prisma/enums").ActividadBitacora;
    costo: number;
}>;
export declare function createBitacora(input: CreateBitacoraInput, userId: number): Promise<{
    user: {
        id: number;
        nombre: string | null;
    };
    lote: {
        id: number;
        nombre: string;
    };
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    producto: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    loteId: number;
    fecha: Date;
    cultivoId: number | null;
    unidadMedida: string | null;
    cantidad: number | null;
    productoId: number | null;
    observaciones: string | null;
    actividad: import("../../generated/prisma/enums").ActividadBitacora;
    costo: number;
}>;
export declare function updateBitacora(id: number, input: UpdateBitacoraInput, userId: number): Promise<{
    user: {
        id: number;
        nombre: string | null;
    };
    lote: {
        id: number;
        nombre: string;
    };
    cultivo: {
        id: number;
        nombre: string;
    } | null;
    producto: {
        id: number;
        nombre: string;
    } | null;
} & {
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    loteId: number;
    fecha: Date;
    cultivoId: number | null;
    unidadMedida: string | null;
    cantidad: number | null;
    productoId: number | null;
    observaciones: string | null;
    actividad: import("../../generated/prisma/enums").ActividadBitacora;
    costo: number;
}>;
export declare function deleteBitacora(id: number, userId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    descripcion: string;
    loteId: number;
    fecha: Date;
    cultivoId: number | null;
    unidadMedida: string | null;
    cantidad: number | null;
    productoId: number | null;
    observaciones: string | null;
    actividad: import("../../generated/prisma/enums").ActividadBitacora;
    costo: number;
}>;
//# sourceMappingURL=bitacora.service.d.ts.map