import { Router } from 'express';
import { check } from 'express-validator';
import {crearVentas} from '../controllers/venta.controller.js'

const router = Router()

router.post('crear-venta', [

], crearVentas)