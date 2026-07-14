import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()

const ROLES = [
  { nombre: "Administrador", descripcion: "Acceso completo al sistema", nivel: 100 },
  { nombre: "Propietario", descripcion: "Acceso administrativo y de gestión", nivel: 80 },
  { nombre: "Trabajador", descripcion: "Solo consulta y actividades asignadas", nivel: 30 },
  { nombre: "Invitado", descripcion: "Solo lectura", nivel: 10 },
]

const PERMISOS = [
  { nombre: "Crear fincas", modulo: "Fincas" },
  { nombre: "Editar fincas", modulo: "Fincas" },
  { nombre: "Eliminar fincas", modulo: "Fincas" },
  { nombre: "Crear lotes", modulo: "Lotes" },
  { nombre: "Editar lotes", modulo: "Lotes" },
  { nombre: "Eliminar lotes", modulo: "Lotes" },
  { nombre: "Crear cultivos", modulo: "Cultivos" },
  { nombre: "Editar cultivos", modulo: "Cultivos" },
  { nombre: "Eliminar cultivos", modulo: "Cultivos" },
  { nombre: "Registrar ventas", modulo: "Ventas" },
  { nombre: "Anular ventas", modulo: "Ventas" },
  { nombre: "Registrar gastos", modulo: "Gastos" },
  { nombre: "Editar gastos", modulo: "Gastos" },
  { nombre: "Registrar movimientos", modulo: "Inventario" },
  { nombre: "Administrar usuarios", modulo: "Administración" },
  { nombre: "Administrar roles", modulo: "Administración" },
  { nombre: "Ver reportes", modulo: "Reportes" },
  { nombre: "Administrar configuración", modulo: "Configuración" },
  { nombre: "Ver dashboard", modulo: "Dashboard" },
  { nombre: "Acceder a bitácora", modulo: "Bitácora" },
]

async function main() {
  for (const rol of ROLES) {
    await prisma.role.upsert({
      where: { nombre: rol.nombre },
      update: { descripcion: rol.descripcion, nivel: rol.nivel },
      create: rol,
    })
  }

  for (const permiso of PERMISOS) {
    await prisma.permission.upsert({
      where: { nombre: permiso.nombre },
      update: { modulo: permiso.modulo },
      create: permiso,
    })
  }

  const adminRole = await prisma.role.findUnique({ where: { nombre: "Administrador" } })
  const allPermissions = await prisma.permission.findMany()

  if (adminRole && allPermissions.length > 0) {
    for (const perm of allPermissions) {
      await prisma.rolePermission.upsert({
        where: { roleId_permissionId: { roleId: adminRole.id, permissionId: perm.id } },
        update: {},
        create: { roleId: adminRole.id, permissionId: perm.id },
      })
    }
  }

  console.log("Roles y permisos creados exitosamente")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
