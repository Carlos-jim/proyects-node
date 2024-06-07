import { validationResult } from "express-validator";
import { createProducto} from "../models/productos.model.js"


//Crear producto 
export const crearProducto = async(req, res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {nombre, descripcion, precio, stock, id_categoria} = req.body

        const result = await createProducto({nombre, descripcion, precio, stock, id_categoria})
        res.status(201).json({message: 'Producto creado exitosamente'})
    
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
} 

