import express from 'express'
import empleadosRoutas from './router/empleados.routes.js'
import indexRoutas from './router/index.routes.js'

const app = express()
const port = 3000
app.use(express.json())

app.use('/api', empleadosRoutas)

app.use(indexRoutas)

app.listen(port)

console.log("Servidor corriendo en el puerto", port)