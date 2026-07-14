import { Router } from "express"
import * as actividadesController from "./actividades-asignadas.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createActividadAsignadaSchema, updateActividadAsignadaSchema } from "./actividades-asignadas.schema"

const router = Router()

router.use(authenticate)

router.get("/", actividadesController.findAll)
router.get("/:id", actividadesController.findById)
router.post("/", validate(createActividadAsignadaSchema), actividadesController.create)
router.put("/:id", validate(updateActividadAsignadaSchema), actividadesController.update)
router.delete("/:id", actividadesController.remove)

export default router
