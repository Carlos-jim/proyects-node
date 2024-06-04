import { validationResult } from "express-validator";
import {createVentas} from '../models/ventas.model.js'

export const crearVentas = async(req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {id_usuario, id_cliente, total} = req.body

        const result = await createVentas({id_usuario, id_cliente, total})
        res.status(201).json({message: 'Venta realizada'})
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
}