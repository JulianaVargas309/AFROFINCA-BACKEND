import { CreateTrabajadorInput, UpdateTrabajadorInput } from "./trabajadores.schema";
export declare function findAll(): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    tipo: string;
    direccion: string | null;
    salarioBase: number | null;
}[]>;
export declare function findById(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    tipo: string;
    direccion: string | null;
    salarioBase: number | null;
}>;
export declare function createTrabajador(input: CreateTrabajadorInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    tipo: string;
    direccion: string | null;
    salarioBase: number | null;
}>;
export declare function updateTrabajador(id: number, input: UpdateTrabajadorInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    tipo: string;
    direccion: string | null;
    salarioBase: number | null;
}>;
export declare function deactivateTrabajador(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    tipo: string;
    direccion: string | null;
    salarioBase: number | null;
}>;
export declare function search(query: string): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    tipo: string;
    direccion: string | null;
    salarioBase: number | null;
}[]>;
//# sourceMappingURL=trabajadores.service.d.ts.map