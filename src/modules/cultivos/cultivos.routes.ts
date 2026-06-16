import { Router } from "express"
import * as cultivosController from "./cultivos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createCultivoSchema, updateCultivoSchema } from "./cultivos.schema"

const router = Router()

router.use(authenticate)

router.get("/", cultivosController.findAll)
router.get("/:id", cultivosController.findById)
router.post("/", validate(createCultivoSchema), cultivosController.create)
router.put("/:id", validate(updateCultivoSchema), cultivosController.update)
router.delete("/:id", cultivosController.remove)

export default router
