import app from "./app"
import { env } from "./config/env"
import { prisma } from "./lib/prisma"

process.on("unhandledRejection", (reason, promise) => {
  console.error("[UNHANDLED REJECTION]", reason)
})

process.on("uncaughtException", (error) => {
  console.error("[UNCAUGHT EXCEPTION]", error)
})

const server = app.listen(env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${env.PORT}`)
})

function shutdown(signal: string) {
  console.log(`\n${signal} recibido. Cerrando servidor...`)
  server.close(async () => {
    await prisma.$disconnect()
    console.log("Servidor cerrado.")
    process.exit(0)
  })
}

process.on("SIGTERM", () => shutdown("SIGTERM"))
process.on("SIGINT", () => shutdown("SIGINT"))

export default server
