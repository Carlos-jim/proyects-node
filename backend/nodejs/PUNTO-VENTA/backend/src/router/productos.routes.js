import { Router } from 'express';
import { check } from 'express-validator';
import { crearProducto, removeProducto, getProductos, getUnProducto, editProducto } from '../controllers/productos.controller.js';

const router = Router();

router.post('/crear-producto', [
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('precio', 'El precio del producto es obligatorio y debe ser un número').isFloat({ min: 0 }),
    check('stock', 'El stock del producto es obligatorio y debe ser un número entero').isInt({ min: 0 })
], crearProducto)

router.get('/obtener-productos', getProductos)
router.get('/obtener-producto/:id', getUnProducto)

router.put('/editar-producto/:id', editProducto)
router.delete('eliminar-producto/:id', removeProducto)

export default router
