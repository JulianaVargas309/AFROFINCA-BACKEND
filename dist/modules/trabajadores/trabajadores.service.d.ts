import { CreateTrabajadorInput, UpdateTrabajadorInput } from "./trabajadores.schema";
export declare function findAll(): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
    tipo: string;
    salarioBase: number | null;
}[]>;
export declare function findById(id: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
    tipo: string;
    salarioBase: number | null;
}>;
export declare function createTrabajador(input: CreateTrabajadorInput): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
    tipo: string;
    salarioBase: number | null;
}>;
export declare function updateTrabajador(id: number, input: UpdateTrabajadorInput): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
    tipo: string;
    salarioBase: number | null;
}>;
export declare function deactivateTrabajador(id: number): Promise<{
    nombre: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
    tipo: string;
    salarioBase: number | null;
}>;
//# sourceMappingURL=trabajadores.service.d.ts.map