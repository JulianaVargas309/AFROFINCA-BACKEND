import { Request, Response, NextFunction } from "express"
import { AppError } from "../types"

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

  console.error("[ERROR]", err)
  res.status(500).json({
    success: false,
    error: "Error interno del servidor",
  })
}
