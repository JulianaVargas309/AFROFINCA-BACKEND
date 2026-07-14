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
const permissionsService = __importStar(require("./permissions.service"));
async function findAll(_req, res) {
    const permissions = await permissionsService.findAll();
    res.json({ success: true, data: permissions });
}
async function findById(req, res) {
    const id = Number(req.params.id);
    const permission = await permissionsService.findById(id);
    res.json({ success: true, data: permission });
}
async function create(req, res) {
    const permission = await permissionsService.create(req.body);
    res.status(201).json({ success: true, data: permission });
}
async function update(req, res) {
    const id = Number(req.params.id);
    const permission = await permissionsService.update(id, req.body);
    res.json({ success: true, data: permission });
}
async function remove(req, res) {
    const id = Number(req.params.id);
    const permission = await permissionsService.remove(id);
    res.json({ success: true, data: permission });
}
//# sourceMappingURL=permissions.controller.js.map