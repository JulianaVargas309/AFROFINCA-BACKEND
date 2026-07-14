import { Router } from "express"
import * as historialController from "./historial-laboral.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createHistorialSchema } from "./historial-laboral.schema"

const router = Router()

router.use(authenticate)

router.get("/", historialController.findAll)
router.get("/:id", historialController.findById)
router.post("/", validate(createHistorialSchema), historialController.create)

export default router
