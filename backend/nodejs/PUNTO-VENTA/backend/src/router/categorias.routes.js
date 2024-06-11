import { Router } from 'express';
import { check } from 'express-validator';
import { crearCategoria, getCategorias, getUnaCategoria, editCategoria, removeCategoria} from '../controllers/categoria.controller.js';

const router = Router()

//Ruta para crear categoria
router.post('/crear-categoria', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
], crearCategoria)

//Ruta para obtener categorias
router.get('/obtener-categorias', getCategorias)

//Ruta para obtener una categoria
router.get('/obtener-categoria/:id', getUnaCategoria)


//Rut para editar categorias
router.put('/editar-categoria/:id', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
], editCategoria)

router.delete('/eliminar-categoria/:id', removeCategoria)

export default router