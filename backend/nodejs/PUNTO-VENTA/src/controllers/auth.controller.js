import { createUser, findbyUserEmail } from "../models/auth.model.js";
import bcrypt from 'bcryptjs';
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken"


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


// Inicio de sesión
export const login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, contrasena } = req.body;
        const user = await findbyUserEmail(email);

        if (!user) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const isMatch = await bcrypt.compare(contrasena, user.contrasena);

        if (!isMatch) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign({ userId: user.id_usuario, email: user.email, rol: user.rol }, 'tu_secreto_jwt', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
};