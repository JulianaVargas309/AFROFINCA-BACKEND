import { CreateLoteInput, UpdateLoteInput } from "./lotes.schema";
export declare function findAll(fincaId: number, userId: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    area: number | null;
    fincaId: number;
}[]>;
export declare function findById(id: number, userId: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    area: number | null;
    fincaId: number;
}>;
export declare function createLote(input: CreateLoteInput, userId: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    area: number | null;
    fincaId: number;
}>;
export declare function updateLote(id: number, input: UpdateLoteInput, userId: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    area: number | null;
    fincaId: number;
}>;
export declare function deactivateLote(id: number, userId: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    area: number | null;
    fincaId: number;
}>;
//# sourceMappingURL=lotes.service.d.ts.map