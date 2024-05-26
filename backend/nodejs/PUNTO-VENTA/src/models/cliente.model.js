import { pool } from "../db"

export const createCliente = async (cliente) => {
    const {nombre, email, telefono, direccion} = cliente

    const [result] = await pool.query('INSERT INTO usuarios (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)', [nombre, email, telefono, direccion])
    return result
}