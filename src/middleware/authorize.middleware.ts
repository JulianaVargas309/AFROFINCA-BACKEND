import { Response, NextFunction } from "express"
import { AuthRequest } from "../types"
import { Rol } from "../types/roles"

export function authorize(...roles: Rol[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ success: false, error: "No autenticado" })
      return
    }

    if (!roles.includes(req.user.rol)) {
      res.status(403).json({
        success: false,
        error: "No tienes permisos para realizar esta acción",
      })
      return
    }

    next()
  }
}
