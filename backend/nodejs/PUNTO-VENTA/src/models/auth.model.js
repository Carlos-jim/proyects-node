import { pool } from "../db.js"
import bcrypt from 'bcryptjs'

//Registro
export const createUser = async (user) => {
    const {nombre, email, contrasena, rol } = user
    const hash = await bcrypt.hash(contrasena, 10)
    const [result] = await pool.query('INSERT INTO usuarios (nombre, email, contrasena, rol) VALUES (?, ?, ?, ?)', [nombre, email, hash, rol])
    return result; 
}

//Login
export const findbyUserEmail = async(email) => {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
}