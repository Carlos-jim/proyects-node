import { Router } from "express";
import { getEmpleados, getEmpleado, postEmpleados, putEmpleados, deleteEmpleado} from "../controllers/empleados.controller.js";

const router = Router()

router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleado)

router.post('/empleados', postEmpleados)

router.patch('/empleados/:id',  putEmpleados)

router.delete('/empleados/:id', deleteEmpleado)

export default router