import { Router } from "express"
import * as clientesController from "./clientes.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createClienteSchema, updateClienteSchema } from "./clientes.schema"

const router = Router()

router.use(authenticate)

router.get("/", clientesController.findAll)
router.get("/:id", clientesController.findById)
router.post("/", validate(createClienteSchema), clientesController.create)
router.put("/:id", validate(updateClienteSchema), clientesController.update)
router.delete("/:id", clientesController.remove)

export default router
