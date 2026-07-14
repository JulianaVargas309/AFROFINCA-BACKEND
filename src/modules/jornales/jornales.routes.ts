import { Router } from "express"
import * as jornalesController from "./jornales.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createJornalSchema, updateJornalSchema, updateEstadoSchema } from "./jornales.schema"

const router = Router()

router.use(authenticate)

router.get("/", jornalesController.findAll)
router.get("/trabajador/:trabajadorId", jornalesController.findByTrabajador)
router.get("/:id", jornalesController.findById)
router.post("/", validate(createJornalSchema), jornalesController.create)
router.put("/:id", validate(updateJornalSchema), jornalesController.update)
router.patch("/:id/estado", validate(updateEstadoSchema), jornalesController.updateEstado)
router.delete("/:id", jornalesController.remove)

export default router
