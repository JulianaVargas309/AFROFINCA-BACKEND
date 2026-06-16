import { Router } from "express"
import * as bitacoraController from "./bitacora.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createBitacoraSchema, updateBitacoraSchema } from "./bitacora.schema"

const router = Router()

router.use(authenticate)

router.get("/", bitacoraController.findAll)
router.get("/:id", bitacoraController.findById)
router.post("/", validate(createBitacoraSchema), bitacoraController.create)
router.put("/:id", validate(updateBitacoraSchema), bitacoraController.update)
router.delete("/:id", bitacoraController.remove)

export default router
