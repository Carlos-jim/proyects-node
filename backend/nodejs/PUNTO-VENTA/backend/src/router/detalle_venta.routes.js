import { Router } from 'express';
import { check } from 'express-validator';
import {getDetallesVentas, getUnDetalleVenta, creartDetalleventa, editDetalleVenta, removeDetalleVenta} from '../controllers/detalle_venta.controller.js'

const router = Router()

router.post('/crear-detalleventa')