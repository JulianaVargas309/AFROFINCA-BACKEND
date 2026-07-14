import { Router } from "express"
import * as categoriasController from "./categorias.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createCategoriaSchema, updateCategoriaSchema } from "./categorias.schema"

const router = Router()

router.use(authenticate)

router.get("/", categoriasController.findAll)
router.get("/:id", categoriasController.findById)
router.post("/", validate(createCategoriaSchema), categoriasController.create)
router.put("/:id", validate(updateCategoriaSchema), categoriasController.update)
router.delete("/:id", categoriasController.remove)

export default router
