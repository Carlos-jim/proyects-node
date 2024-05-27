import { validationResult } from "express-validator";
import {createCategoria} from "../models/productos.model.js"

export const crearCategoria = async(req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {nombre, descripcion} = req.body

        const result = await createCategoria({nombre, descripcion})
        res.status(201).json({message: 'Categoria creada exitosamente', categoriaId: result.insertId})
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
}