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
      message: err.message,
    })
    return
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const mapping = PRISMA_ERROR_MAP[err.code]
    if (mapping) {
      res.status(mapping.status).json({
        success: false,
        message: mapping.message,
        ...(err.code === "P2002" && {
          details: err.meta?.target,
        }),
      })
      return
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    console.error("[VALIDATION ERROR]", err.message)
    res.status(400).json({
      success: false,
      message: "Error de validación en la base de datos",
    })
    return
  }

  if (err instanceof Prisma.PrismaClientInitializationError) {
    console.error("[DB INIT ERROR]", err.message)
    res.status(500).json({
      success: false,
      message: "Error de conexión con la base de datos",
    })
    return
  }

  if (err instanceof SyntaxError && "body" in err) {
    res.status(400).json({
      success: false,
      message: "JSON inválido en la petición",
    })
    return
  }

  console.error("[ERROR]", err)

  const isDev = process.env.NODE_ENV === "development"
  res.status(500).json({
    success: false,
    message: isDev ? err.message : "Error interno del servidor",
    ...(isDev && { stack: err.stack }),
  })
}
