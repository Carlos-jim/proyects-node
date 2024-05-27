import { registerCliente } from '../controllers/cliente.controller.js';
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router()

router.post('/register-cliente', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo de usuario es obligatorio y debe ser un correo válido').isEmail(),
    check('telefono', 'El numero de telefono del cleinte es oblifgatorio').not().isEmpty().isNumeric(),
    check('direccion', 'El numero de telefono del cleinte es oblifgatorio').not().isEmpty()

], registerCliente)

export default router;