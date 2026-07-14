import { Router } from "express"
import * as permissionsController from "./permissions.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createPermissionSchema, updatePermissionSchema } from "./permissions.schema"

const router = Router()

router.use(authenticate)

router.get("/", permissionsController.findAll)
router.get("/:id", permissionsController.findById)
router.post("/", validate(createPermissionSchema), permissionsController.create)
router.put("/:id", validate(updatePermissionSchema), permissionsController.update)
router.delete("/:id", permissionsController.remove)

export default router
