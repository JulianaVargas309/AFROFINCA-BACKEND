"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().default(3000),
    NODE_ENV: zod_1.z
        .enum(["development", "production", "test"])
        .default("development"),
    DATABASE_URL: zod_1.z.string().url(),
    JWT_SECRET: zod_1.z.string().min(10, "JWT_SECRET debe tener al menos 10 caracteres"),
    JWT_EXPIRES_IN: zod_1.z.string().default("7d"),
    REFRESH_TOKEN_EXPIRES_IN_DAYS: zod_1.z.coerce.number().default(7),
    CORS_ORIGIN: zod_1.z.string().default("*"),
});
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    console.error("Error en variables de entorno:");
    for (const issue of parsed.error.issues) {
        console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
    }
    process.exit(1);
}
exports.env = parsed.data;
//# sourceMappingURL=env.js.map