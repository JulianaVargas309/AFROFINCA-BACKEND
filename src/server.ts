import app from "./app"
import { env } from "./config/env"

const server = app.listen(env.port, () => {
  console.log(`Servidor corriendo en puerto ${env.port}`)
})

export default server
