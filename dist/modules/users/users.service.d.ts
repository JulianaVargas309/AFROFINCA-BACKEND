import { CreateUserInput, UpdateUserInput, ChangePasswordInput, ChangeRolInput } from "./users.schema";
export declare function findAll(): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}[]>;
export declare function findById(id: number): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function createUser(input: CreateUserInput): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function updateUser(id: number, input: UpdateUserInput): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function deactivateUser(id: number): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function changePassword(id: number, input: ChangePasswordInput): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function changeRol(id: number, input: ChangeRolInput): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function updateProfile(id: number, input: UpdateUserInput): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function findByDocumento(documento: string): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}>;
export declare function search(query: string): Promise<{
    documento: string;
    rol: import("../../generated/prisma/enums").Rol;
    id: number;
    nombre: string | null;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
}[]>;
//# sourceMappingURL=users.service.d.ts.map