import "dotenv/config"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../src/generated/prisma/client"
import bcrypt from "bcryptjs"

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  const prisma = new PrismaClient({ adapter })

  const adminEmail = "admin@agrofinca.com"

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } })
  if (existing) {
    console.log("Usuario admin ya existe, saltando seed.")
    await prisma.$disconnect()
    return
  }

  const password = await bcrypt.hash("admin123", 10)

  await prisma.user.create({
    data: {
      nombre: "Admin",
      email: adminEmail,
      password,
      rol: "admin",
    },
  })

  console.log("Usuario admin creado:")
  console.log("  Email: admin@agrofinca.com")
  console.log("  Password: admin123")

  await prisma.$disconnect()
}

main().catch((e) => {
  console.error("Error en seed:", e)
  process.exit(1)
})
