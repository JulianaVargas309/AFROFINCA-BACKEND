import { CreateClienteInput, UpdateClienteInput } from "./clientes.schema";
export declare function findAll(page?: number, limit?: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}[] | import("../../lib/pagination").PaginatedResponse<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>>;
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
export declare function createCliente(input: CreateClienteInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
export declare function updateCliente(id: number, input: UpdateClienteInput): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
export declare function deactivateCliente(id: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
}>;
//# sourceMappingURL=clientes.service.d.ts.map