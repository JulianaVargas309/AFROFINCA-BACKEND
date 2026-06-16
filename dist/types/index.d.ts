import { Request } from "express";
export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        nombre: string;
        rol: string;
    };
}
export declare class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
//# sourceMappingURL=index.d.ts.map