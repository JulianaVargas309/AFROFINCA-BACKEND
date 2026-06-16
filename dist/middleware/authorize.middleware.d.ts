import { Response, NextFunction } from "express";
import { AuthRequest } from "../types";
export declare function authorize(...roles: string[]): (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authorize.middleware.d.ts.map