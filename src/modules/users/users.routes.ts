import { Router } from "express"
import * as usersController from "./users.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createUserSchema, updateUserSchema } from "./users.schema"

const router = Router()

router.use(authenticate)

router.get("/", usersController.findAll)
router.get("/:id", usersController.findById)
router.post("/", validate(createUserSchema), usersController.create)
router.put("/:id", validate(updateUserSchema), usersController.update)
router.delete("/:id", usersController.remove)

export default router
