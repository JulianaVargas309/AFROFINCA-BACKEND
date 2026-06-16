import { Request, Response, NextFunction } from "express"
import { AppError } from "../types"
import { Prisma } from "../generated/prisma/client"

const PRISMA_ERROR_MAP: Record<string, { status: number; message: string }> = {
  P2002: { status: 409, message: "El registro ya existe (valor duplicado)" },
  P2025: { status: 404, message: "Registro no encontrado" },
  P2003: { status: 400, message: "Referencia inválida a otro registro" },
  P2014: { status: 400, message: "Violación de relación" },
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
    })
    return
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const mapping = PRISMA_ERROR_MAP[err.code]
    if (mapping) {
      res.status(mapping.status).json({
        success: false,
        error: mapping.message,
        ...(err.code === "P2002" && {
          details: err.meta?.target,
        }),
      })
      return
    }
  }

  console.error("[ERROR]", err)
  res.status(500).json({
    success: false,
    error: "Error interno del servidor",
  })
}
