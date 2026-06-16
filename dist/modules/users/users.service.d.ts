import { CreateUserInput, UpdateUserInput } from "./users.schema";
export declare function findAll(): Promise<{
    nombre: string;
    email: string;
    rol: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
}[]>;
export declare function findById(id: number): Promise<{
    nombre: string;
    email: string;
    rol: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function createUser(input: CreateUserInput): Promise<{
    nombre: string;
    email: string;
    rol: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function updateUser(id: number, input: UpdateUserInput): Promise<{
    nombre: string;
    email: string;
    rol: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function deactivateUser(id: number): Promise<{
    nombre: string;
    email: string;
    rol: string;
    createdAt: Date;
    id: number;
    activo: boolean;
    updatedAt: Date;
}>;
//# sourceMappingURL=users.service.d.ts.map