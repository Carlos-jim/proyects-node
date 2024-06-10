import {crearVentas, getUnaVenta, getVentas, removeVenta, editVenta} from '../controllers/venta.controller.js'
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router()

router.post('/crear-venta', [
    check('id_usuario', 'El ID del usuario es obligatorio').isInt(),
    check('id_cliente', 'El ID del cliente es obligatorio').isInt(),
    check('total', 'El total es obligatorio y debe ser un número').isFloat({ min: 0 }),
], crearVentas)


router.get('/obtener-ventas', getVentas)
router.get('/obtener-venta', getUnaVenta)

router.put('/editar-venta', [
    check('id_usuario', 'El ID del usuario es obligatorio').isInt(),
    check('id_cliente', 'El ID del cliente es obligatorio').isInt(),
    check('total', 'El total es obligatorio y debe ser un número').isFloat({ min: 0 }),
], editVenta)

router.delete('/eliminar-venta', removeVenta)

export default router