import { Router } from "express"
import * as trabajadoresController from "./trabajadores.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createTrabajadorSchema, updateTrabajadorSchema } from "./trabajadores.schema"

const router = Router()

router.use(authenticate)

router.get("/", trabajadoresController.findAll)
router.get("/:id", trabajadoresController.findById)
router.post("/", validate(createTrabajadorSchema), trabajadoresController.create)
router.put("/:id", validate(updateTrabajadorSchema), trabajadoresController.update)
router.delete("/:id", trabajadoresController.remove)

export default router
