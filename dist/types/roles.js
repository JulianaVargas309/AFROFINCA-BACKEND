"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES_HIERARCHY = exports.Rol = void 0;
exports.tienePermiso = tienePermiso;
var Rol;
(function (Rol) {
    Rol["ADMIN"] = "ADMIN";
    Rol["FAMILIAR"] = "FAMILIAR";
    Rol["CONSULTA"] = "CONSULTA";
})(Rol || (exports.Rol = Rol = {}));
exports.ROLES_HIERARCHY = {
    [Rol.ADMIN]: 3,
    [Rol.FAMILIAR]: 2,
    [Rol.CONSULTA]: 1,
};
function tienePermiso(rolUsuario, rolMinimo) {
    return exports.ROLES_HIERARCHY[rolUsuario] >= exports.ROLES_HIERARCHY[rolMinimo];
}
//# sourceMappingURL=roles.js.map