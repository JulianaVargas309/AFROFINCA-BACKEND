"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoleSchema = exports.createRoleSchema = void 0;
const zod_1 = require("zod");
exports.createRoleSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100),
    descripcion: zod_1.z.string().optional(),
    nivel: zod_1.z.number().int().min(0).default(0),
    permissionIds: zod_1.z.array(zod_1.z.number().int().positive()).optional(),
});
exports.updateRoleSchema = exports.createRoleSchema.partial();
//# sourceMappingURL=roles.schema.js.map