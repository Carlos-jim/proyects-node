import { validationResult } from "express-validator";
import { createCliente } from "../models/cliente.model.js";

//registro cliente
export const registerCliente = async(req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {nombre, email, telefono, direccion} = req.body

        const result = await createCliente({nombre, email, telefono, direccion})
        res.status(201).json({message: 'Cliente creado exitosamente', userId: result.insertId})
    } catch (error) {
        res.status(500).json({message: "Error"})
    }
}