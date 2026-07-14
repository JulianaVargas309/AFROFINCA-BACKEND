import { Request } from "express";
import { Rol } from "./roles";
export interface AuthRequest extends Request {
    user?: {
        id: number;
        documento: string;
        nombre: string | null;
        rol: Rol;
    };
}
export declare class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
//# sourceMappingURL=index.d.ts.map