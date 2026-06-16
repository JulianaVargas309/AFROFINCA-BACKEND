"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const prisma_1 = require("./lib/prisma");
const server = app_1.default.listen(env_1.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${env_1.env.PORT}`);
});
function shutdown(signal) {
    console.log(`\n${signal} recibido. Cerrando servidor...`);
    server.close(async () => {
        await prisma_1.prisma.$disconnect();
        console.log("Servidor cerrado.");
        process.exit(0);
    });
}
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
exports.default = server;
//# sourceMappingURL=server.js.map