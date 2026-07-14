import { Router } from "express"
import * as calendarioController from "./calendario.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createEventoSchema, updateEventoSchema } from "./calendario.schema"

const router = Router()

router.use(authenticate)

router.get("/rango", calendarioController.findAll)
router.get("/", calendarioController.findAll)
router.get("/:id", calendarioController.findById)
router.post("/", validate(createEventoSchema), calendarioController.create)
router.put("/:id", validate(updateEventoSchema), calendarioController.update)
router.delete("/:id", calendarioController.remove)

export default router
