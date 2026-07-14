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
  try {
    const user = await usersService.createUser(req.body)
    res.status(201).json({ success: true, data: user })
  } catch (error) {
    console.error("[CREATE USER ERROR]", error)
    throw error
  }
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

export async function changePassword(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await usersService.changePassword(id, req.body)
  res.json({ success: true, data: user })
}

export async function changeRol(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await usersService.changeRol(id, req.body)
  res.json({ success: true, data: user })
}

export async function updateProfile(req: Request, res: Response) {
  const id = Number(req.params.id)
  const user = await usersService.updateProfile(id, req.body)
  res.json({ success: true, data: user })
}

export async function search(req: Request, res: Response) {
  const query = req.query.q as string
  if (!query) {
    const users = await usersService.findAll()
    res.json({ success: true, data: users })
    return
  }
  const users = await usersService.search(query)
  res.json({ success: true, data: users })
}
