import { Request } from "express"

export interface AuthRequest extends Request {
  user?: {
    id: number
    email: string
    nombre: string
    rol: string
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
