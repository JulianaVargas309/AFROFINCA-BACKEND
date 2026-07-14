export declare enum Rol {
    ADMIN = "ADMIN",
    FAMILIAR = "FAMILIAR",
    CONSULTA = "CONSULTA"
}
export declare const ROLES_HIERARCHY: Record<Rol, number>;
export declare function tienePermiso(rolUsuario: Rol, rolMinimo: Rol): boolean;
//# sourceMappingURL=roles.d.ts.map