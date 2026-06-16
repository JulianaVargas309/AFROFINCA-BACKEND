"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const server = app_1.default.listen(env_1.env.port, () => {
    console.log(`Servidor corriendo en puerto ${env_1.env.port}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map