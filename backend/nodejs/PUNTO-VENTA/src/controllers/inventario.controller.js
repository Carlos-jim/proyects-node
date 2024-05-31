import { validationResult } from "express-validator";
import { createInventario } from "../models/inventario.model";


export const crearInventario = async(req, res)=> {
    const erros = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {id_producto, cantidad, tipo_movimiento, descripcion} = req.body

        const result = await createInventario ({id_producto, cantidad, tipo_movimiento, descripcion})
    } catch (error) {
        res.status(500).json({message: 'Error'})
        
    }
}