import { Router } from "express"
import * as notificacionesController from "./notificaciones.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createNotificacionSchema } from "./notificaciones.schema"

const router = Router()

router.use(authenticate)

router.get("/", notificacionesController.findAll)
router.get("/contar", notificacionesController.getNoLeidasCount)
router.get("/:id", notificacionesController.findById)
router.post("/", validate(createNotificacionSchema), notificacionesController.create)
router.patch("/:id/leer", notificacionesController.marcarLeida)
router.patch("/leer-todas", notificacionesController.marcarTodasLeidas)
router.delete("/:id", notificacionesController.remove)

export default router
