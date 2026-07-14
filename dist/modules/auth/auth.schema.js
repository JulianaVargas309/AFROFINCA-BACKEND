"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    documento: zod_1.z.string().min(6).max(12),
    rol: zod_1.z.enum(["ADMIN", "FAMILIAR", "CONSULTA"]).optional().default("FAMILIAR"),
});
exports.loginSchema = zod_1.z.object({
    documento: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
});
exports.refreshSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(1),
});
//# sourceMappingURL=auth.schema.js.map