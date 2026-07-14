import { Router } from "express"
import * as asistenciasController from "./asistencias.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createAsistenciaSchema, entradaSchema, salidaSchema } from "./asistencias.schema"

const router = Router()

router.use(authenticate)

router.get("/", asistenciasController.findAll)
router.get("/:id", asistenciasController.findById)
router.post("/", validate(createAsistenciaSchema), asistenciasController.createOrUpdate)
router.post("/entrada", validate(entradaSchema), asistenciasController.marcarEntrada)
router.post("/salida", validate(salidaSchema), asistenciasController.marcarSalida)

export default router
