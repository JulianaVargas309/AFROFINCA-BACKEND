"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePermissionSchema = exports.createPermissionSchema = void 0;
const zod_1 = require("zod");
exports.createPermissionSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100),
    descripcion: zod_1.z.string().optional(),
    modulo: zod_1.z.string().optional(),
});
exports.updatePermissionSchema = exports.createPermissionSchema.partial();
//# sourceMappingURL=permissions.schema.js.map