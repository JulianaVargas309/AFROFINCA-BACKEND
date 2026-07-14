import { Router } from "express"
import * as rolesController from "./roles.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createRoleSchema, updateRoleSchema } from "./roles.schema"

const router = Router()

router.use(authenticate)

router.get("/", rolesController.findAll)
router.get("/:id", rolesController.findById)
router.post("/", validate(createRoleSchema), rolesController.create)
router.put("/:id", validate(updateRoleSchema), rolesController.update)
router.delete("/:id", rolesController.remove)

export default router
