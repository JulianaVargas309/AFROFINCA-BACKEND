import { CreateFincaInput, UpdateFincaInput } from "./fincas.schema";
export declare function findAll(userId: number): Promise<{
    nombre: string;
    id: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
    userId: number;
}[]>;
export declare function findById(id: number, userId: number): Promise<{
    nombre: string;
    id: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
    userId: number;
}>;
export declare function createFinca(input: CreateFincaInput, userId: number): Promise<{
    nombre: string;
    id: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
    userId: number;
}>;
export declare function updateFinca(id: number, input: UpdateFincaInput, userId: number): Promise<{
    nombre: string;
    id: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
    userId: number;
}>;
export declare function deactivateFinca(id: number, userId: number): Promise<{
    nombre: string;
    id: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
    userId: number;
}>;
//# sourceMappingURL=fincas.service.d.ts.map