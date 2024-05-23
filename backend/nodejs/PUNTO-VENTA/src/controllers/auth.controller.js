import { createUser } from "../models/register.model.js";
import { validationResult } from "express-validator";


//Registro
export const register = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {nombre, email, contrasena, rol} = req.body

        const result = await createUser({nombre, email, contrasena, rol})
        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: "Error"});
    }
}