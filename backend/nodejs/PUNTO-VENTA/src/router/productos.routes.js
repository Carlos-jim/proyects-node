import { Router } from 'express';
import { check } from 'express-validator';
import { crearCategoria } from '../controllers/productos.controller.js';

const router = Router()

router.post('/crear-categoria', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
], crearCategoria)


export default router