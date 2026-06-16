import { CreateProveedorInput, UpdateProveedorInput } from "./proveedores.schema";
export declare function findAll(): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}[]>;
export declare function findById(id: number): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
export declare function createProveedor(input: CreateProveedorInput): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
export declare function updateProveedor(id: number, input: UpdateProveedorInput): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
export declare function deactivateProveedor(id: number): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
//# sourceMappingURL=proveedores.service.d.ts.map