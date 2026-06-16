import { RegisterInput, LoginInput } from "./auth.schema";
export declare function registerUser(input: RegisterInput): Promise<{
    user: {
        nombre: string;
        email: string;
        rol: string;
        createdAt: Date;
        id: number;
        activo: boolean;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare function refreshUserToken(refreshToken: string): Promise<{
    user: {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    };
    accessToken: string;
    refreshToken: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map