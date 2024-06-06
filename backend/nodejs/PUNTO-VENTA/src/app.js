import express from 'express'
import indexRoutas from './router/index.routes.js'
import userRoutes from './router/auth.routes.js'
import clienteRoutes from './router/cliente.routes.js'
import productoRoutes from './router/productos.routes.js'
import inventarioRoutes from './router/inventario.routes.js'
import ventaRoutes from './router/venta.routes.js'
const app = express()

app.use(express.json())


//app.use('/api', empleadosRoutas)
app.use(indexRoutas)
app.use('/api', userRoutes)
app.use('/api', clienteRoutes)
app.use('/api',  productoRoutes)
app.use('/api', inventarioRoutes)
app.use('/api', ventaRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });
  

  export default app