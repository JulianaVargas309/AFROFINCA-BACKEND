import { CreateClienteInput, UpdateClienteInput } from "./clientes.schema";
export declare function findAll(page?: number, limit?: number): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}[] | import("../../lib/pagination").PaginatedResponse<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>>;
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
export declare function createCliente(input: CreateClienteInput): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
export declare function updateCliente(id: number, input: UpdateClienteInput): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
export declare function deactivateCliente(id: number): Promise<{
    nombre: string;
    email: string | null;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
    telefono: string | null;
    direccion: string | null;
}>;
//# sourceMappingURL=clientes.service.d.ts.map