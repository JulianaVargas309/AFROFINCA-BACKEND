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
const cultivosService = __importStar(require("./cultivos.service"));
async function findAll(req, res) {
    const loteId = req.query.loteId ? Number(req.query.loteId) : undefined;
    const cultivos = await cultivosService.findAll(loteId && !isNaN(loteId) ? loteId : undefined, req.user.id);
    res.json({ success: true, data: cultivos });
}
async function findById(req, res) {
    const id = Number(req.params.id);
    const cultivo = await cultivosService.findById(id, req.user.id);
    res.json({ success: true, data: cultivo });
}
async function create(req, res) {
    const cultivo = await cultivosService.createCultivo(req.body, req.user.id);
    res.status(201).json({ success: true, data: cultivo });
}
async function update(req, res) {
    const id = Number(req.params.id);
    const cultivo = await cultivosService.updateCultivo(id, req.body, req.user.id);
    res.json({ success: true, data: cultivo });
}
async function remove(req, res) {
    const id = Number(req.params.id);
    const cultivo = await cultivosService.deactivateCultivo(id, req.user.id);
    res.json({ success: true, data: cultivo });
}
//# sourceMappingURL=cultivos.controller.js.map