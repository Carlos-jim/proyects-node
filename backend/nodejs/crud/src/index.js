import express from 'express'
import empleadosRoutas from './router/empleados.routes.js'
import indexRoutas from './router/index.routes.js'

const app = express()
const port = 3000

app.use(empleadosRoutas)

app.use(indexRoutas)

app.listen(port)

console.log("Servidor corriendo en el puerto", port)