import { Response, NextFunction } from "express";
import { AuthRequest } from "../types";
import { Rol } from "../types/roles";
export declare function authorize(rolMinimo: Rol): (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authorize.middleware.d.ts.map