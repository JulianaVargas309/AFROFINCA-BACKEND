import { Response, NextFunction } from "express"
import { AuthRequest } from "../types"
import { Rol, tienePermiso } from "../types/roles"

export function authorize(rolMinimo: Rol) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ success: false, message: "No autenticado" })
      return
    }

    if (!tienePermiso(req.user.rol, rolMinimo)) {
      res.status(403).json({
        success: false,
        message: "No tienes permisos para realizar esta acción",
      })
      return
    }

    next()
  }
}
