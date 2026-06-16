import { Router } from "express"
import * as usersController from "./users.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { authorize } from "../../middleware/authorize.middleware"
import { Rol } from "../../types/roles"
import { validate } from "../../middleware/validate.middleware"
import { createUserSchema, updateUserSchema } from "./users.schema"

const router = Router()

router.use(authenticate)

router.get("/", usersController.findAll)
router.get("/:id", usersController.findById)
router.post("/", authorize(Rol.ADMIN), validate(createUserSchema), usersController.create)
router.put("/:id", authorize(Rol.ADMIN), validate(updateUserSchema), usersController.update)
router.delete("/:id", authorize(Rol.ADMIN), usersController.remove)

export default router
