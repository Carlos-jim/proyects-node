import { Router } from "express";
import { check } from 'express-validator';
import { crearInventario, getUnInventario, getInventarios, editInventario, removeInventario } from "../controllers/inventario.controller.js"; 

const router = Router()


router.post('/crear-inventario', [
    check('id_producto', 'El ID del producto es obligatorio').isInt(),
    check('cantidad', 'La cantidad es obligatoria y debe ser un número entero').isInt(),
    check('tipo_movimiento', 'El tipo de movimiento es obligatorio y debe ser "entrada" o "salida"').isIn(['entrada', 'salida']),
], crearInventario)  

router.get('/obtener-inventarios', getInventarios)
router.get('/obtener-inventario', getUnInventario)

router.put('/editar-inventario', [
    check('id_producto', 'El ID del producto es obligatorio').isInt(),
    check('cantidad', 'La cantidad es obligatoria y debe ser un número entero').isInt(),
    check('tipo_movimiento', 'El tipo de movimiento es obligatorio y debe ser "entrada" o "salida"').isIn(['entrada', 'salida']),
], editInventario)


router.delete('/eliminar-inventario', removeInventario)


export default router