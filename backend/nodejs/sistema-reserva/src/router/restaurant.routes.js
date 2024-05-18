import { Router } from "express";
import {postUser} from '../controllers/restaurant.controller.js'

const router = Router()


//Ruta de registro
router.post('/register',  postUser)

export default router