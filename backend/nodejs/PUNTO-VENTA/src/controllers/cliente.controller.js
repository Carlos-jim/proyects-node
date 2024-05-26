import { validationResult } from "express-validator";
import { createCliente } from "../models/cliente.model";

//registro cliente
export const registerCliente = async(req,res) => {
    const errors = validationResult()

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        
    } catch (error) {
        const {nombre, email, telefono, direccion} = req.body

        const result = await createCliente({nombre, email, telefono, direccion})
        res.status(201).json({message: 'Cliente creado exitosamente', userId: result.insertId})
    }
}