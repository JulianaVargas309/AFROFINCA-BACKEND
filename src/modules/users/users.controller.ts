import { Request, Response } from "express"
import * as usersService from "./users.service"

export async function findAll(_req: Request, res: Response) {
  const users = await usersService.findAll()
  res.json({ success: true, data: users })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await usersService.findById(id)
  res.json({ success: true, data: user })
}

export async function create(req: Request, res: Response) {
  const user = await usersService.createUser(req.body)
  res.status(201).json({ success: true, data: user })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await usersService.updateUser(id, req.body)
  res.json({ success: true, data: user })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await usersService.deactivateUser(id)
  res.json({ success: true, data: user })
}
