import {crearVentas} from '../controllers/venta.controller.js'
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router()

router.post('/crear-venta', [
    check('id_usuario', 'El ID del usuario es obligatorio').isInt(),
    check('id_cliente', 'El ID del cliente es obligatorio').isInt(),
    check('total', 'El total es obligatorio y debe ser un número').isFloat({ min: 0 }),
], crearVentas)

export default router