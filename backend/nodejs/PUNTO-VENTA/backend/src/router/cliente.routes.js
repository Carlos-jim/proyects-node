import { registerCliente, getClientes, getIdCliente, editCliente } from '../controllers/cliente.controller.js';
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router()

//Crear clientes
router.post('/register-cliente', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo de usuario es obligatorio y debe ser un correo válido').isEmail(),
    check('telefono', 'El numero de telefono del cleinte es oblifgatorio').not().isEmpty().isNumeric(),
    check('direccion', 'El numero de telefono del cleinte es oblifgatorio').not().isEmpty()

], registerCliente)

//Obtene clientes
router.get('/obtener-clientes', getClientes)

//Obtner un cliente
router.get('/obtener-cliente/:id', getIdCliente)

router.put('/editar-cliente/:id', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo de usuario es obligatorio y debe ser un correo válido').isEmail(),
    check('telefono', 'El numero de telefono del cleinte es oblifgatorio').not().isEmpty().isNumeric(),
    check('direccion', 'El numero de telefono del cleinte es oblifgatorio').not().isEmpty()
], editCliente)

router.delete('/eliminar-cliente/:id')

export default router;