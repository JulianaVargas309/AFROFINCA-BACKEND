import { Request } from "express"
import { Rol } from "./roles"

export interface AuthRequest extends Request {
  user?: {
    id: number
    documento: string
    nombre: string | null
    rol: Rol
  }
}

export class AppError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number = 400) {
    super(message)
    this.statusCode = statusCode
    this.name = "AppError"
  }
}
