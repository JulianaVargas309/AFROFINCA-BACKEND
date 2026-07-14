import { CreateProveedorInput, UpdateProveedorInput } from "./proveedores.schema";
export declare function findAll(): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}[]>;
export declare function findById(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
export declare function createProveedor(input: CreateProveedorInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
export declare function updateProveedor(id: number, input: UpdateProveedorInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
export declare function deactivateProveedor(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
//# sourceMappingURL=proveedores.service.d.ts.map