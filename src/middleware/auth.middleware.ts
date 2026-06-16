import { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { AuthRequest } from "../types"
import { env } from "../config/env"

export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization
  if (!header || !header.startsWith("Bearer ")) {
    res.status(401).json({ success: false, error: "Token no proporcionado" })
    return
  }

  const token = header.split(" ")[1]
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as AuthRequest["user"]
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ success: false, error: "Token inválido" })
  }
}
