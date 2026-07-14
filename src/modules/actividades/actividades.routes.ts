import { Router } from "express"
import * as actividadesController from "./actividades.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createActividadSchema, updateActividadSchema, updateEstadoSchema } from "./actividades.schema"

const router = Router()

router.use(authenticate)

router.get("/", actividadesController.findAll)
router.get("/:id", actividadesController.findById)
router.post("/", validate(createActividadSchema), actividadesController.create)
router.put("/:id", validate(updateActividadSchema), actividadesController.update)
router.patch("/:id/estado", validate(updateEstadoSchema), actividadesController.updateEstado)
router.delete("/:id", actividadesController.remove)

export default router
