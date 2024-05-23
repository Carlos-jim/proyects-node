import { Router } from 'express';
import { check } from 'express-validator';
import { register } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo de usuario es obligatorio y debe ser un correo válido').isEmail(),
    check('contraseña', 'La contraseña de usuario es obligatoria y debe tener al menos 6 caracteres'),
    check('rol', 'El rol de usuario es obligatorio y debe ser "admin" o "cajero"').isIn(['admin', 'cajero'])
], register);

export default router;
