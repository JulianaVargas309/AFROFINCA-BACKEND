import { Router } from "express"
import * as flujoController from "./flujo.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createFlujoSchema } from "./flujo.schema"

const router = Router()

router.use(authenticate)

router.get("/", flujoController.findAll)
router.get("/resumen", flujoController.getResumen)
router.get("/:id", flujoController.findById)
router.post("/", validate(createFlujoSchema), flujoController.create)

export default router
