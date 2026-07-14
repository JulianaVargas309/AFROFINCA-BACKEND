import { Router } from "express"
import * as configuracionController from "./configuracion.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { upsertConfigSchema } from "./configuracion.schema"

const router = Router()

router.use(authenticate)

router.get("/", configuracionController.findAll)
router.get("/:llave", configuracionController.findByLlave)
router.put("/:llave", validate(upsertConfigSchema), configuracionController.upsert)
router.delete("/:llave", configuracionController.remove)

export default router
