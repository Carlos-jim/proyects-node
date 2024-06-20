import express from 'express';
import cors from 'cors'; // Importa cors
import indexRoutas from './router/index.routes.js';
import userRoutes from './router/auth.routes.js';
import clienteRoutes from './router/cliente.routes.js';
import productoRoutes from './router/productos.routes.js';
import inventarioRoutes from './router/inventario.routes.js';
import ventaRoutes from './router/venta.routes.js';
import categoriasRouter from './router/categorias.routes.js';

const app = express();

// Configuración básica de CORS
app.use(cors({
  origin: 'http://localhost:3001', // Cambia esto a la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use(indexRoutas);
app.use('/api', userRoutes);
app.use('/api', clienteRoutes);
app.use('/api', productoRoutes);
app.use('/api', inventarioRoutes);
app.use('/api', ventaRoutes);
app.use('/api', categoriasRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
