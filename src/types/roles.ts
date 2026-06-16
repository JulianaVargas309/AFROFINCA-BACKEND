export enum Rol {
  ADMIN = "ADMIN",
  FAMILIAR = "FAMILIAR",
  CONSULTA = "CONSULTA",
}

export const ROLES_HIERARCHY: Record<Rol, number> = {
  [Rol.ADMIN]: 3,
  [Rol.FAMILIAR]: 2,
  [Rol.CONSULTA]: 1,
}

export function tienePermiso(rolUsuario: Rol, rolMinimo: Rol): boolean {
  return ROLES_HIERARCHY[rolUsuario] >= ROLES_HIERARCHY[rolMinimo]
}
