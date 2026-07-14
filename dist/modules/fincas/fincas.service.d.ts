import { CreateFincaInput, UpdateFincaInput } from "./fincas.schema";
export declare function findAll(userId: number, page?: number, limit?: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}[] | import("../../lib/pagination").PaginatedResponse<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}>>;
export declare function findById(id: number, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}>;
export declare function createFinca(input: CreateFincaInput, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}>;
export declare function updateFinca(id: number, input: UpdateFincaInput, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}>;
export declare function deactivateFinca(id: number, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}>;
//# sourceMappingURL=fincas.service.d.ts.map