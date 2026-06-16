"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
const jornalesService = __importStar(require("./jornales.service"));
async function findAll(req, res) {
    const trabajadorId = Number(req.query.trabajadorId);
    const jornales = await jornalesService.findAll(trabajadorId, req.user.id);
    res.json({ success: true, data: jornales });
}
async function findById(req, res) {
    const id = Number(req.params.id);
    const jornal = await jornalesService.findById(id, req.user.id);
    res.json({ success: true, data: jornal });
}
async function create(req, res) {
    const jornal = await jornalesService.createJornal(req.body, req.user.id);
    res.status(201).json({ success: true, data: jornal });
}
async function update(req, res) {
    const id = Number(req.params.id);
    const jornal = await jornalesService.updateJornal(id, req.body, req.user.id);
    res.json({ success: true, data: jornal });
}
async function remove(req, res) {
    const id = Number(req.params.id);
    await jornalesService.deleteJornal(id, req.user.id);
    res.json({ success: true, message: "Jornal eliminado" });
}
//# sourceMappingURL=jornales.controller.js.map