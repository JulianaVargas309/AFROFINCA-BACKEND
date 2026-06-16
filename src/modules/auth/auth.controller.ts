import { Request, Response } from "express"
import * as authService from "./auth.service"

export async function register(req: Request, res: Response) {
  const result = await authService.registerUser(req.body)
  res.status(201).json({ success: true, data: result })
}

export async function login(req: Request, res: Response) {
  const result = await authService.loginUser(req.body)
  res.json({ success: true, data: result })
}

export async function refresh(req: Request, res: Response) {
  const result = await authService.refreshUserToken(req.body.refreshToken)
  res.json({ success: true, data: result })
}
