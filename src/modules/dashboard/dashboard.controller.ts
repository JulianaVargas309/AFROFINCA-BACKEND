import { Response } from "express"
import { AuthRequest } from "../../types"
import * as dashboardService from "./dashboard.service"

export async function getResumen(req: AuthRequest, res: Response) {
  const resumen = await dashboardService.getResumen(req.user!.id)
  res.json({ success: true, data: resumen })
}
