import { Router } from "express"
import * as ajustesController from "./ajustes.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createAjusteSchema } from "./ajustes.schema"

const router = Router()

router.use(authenticate)

router.get("/", ajustesController.findAll)
router.post("/", validate(createAjusteSchema), ajustesController.create)

export default router
