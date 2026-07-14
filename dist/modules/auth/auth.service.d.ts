import { RegisterInput, LoginInput } from "./auth.schema";
export declare function registerUser(input: RegisterInput): Promise<{
    user: {
        nombre: string;
        documento: string;
        rol: import("../../generated/prisma/enums").Rol;
        id: number;
        createdAt: Date;
        activo: boolean;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: {
        id: number;
        nombre: string | null;
        documento: string;
        rol: import("../../generated/prisma/enums").Rol;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare function refreshUserToken(refreshToken: string): Promise<{
    user: {
        id: number;
        nombre: string | null;
        documento: string;
        rol: import("../../generated/prisma/enums").Rol;
    };
    accessToken: string;
    refreshToken: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map