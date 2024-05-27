import { pool } from "../db.js"

export const createCliente = async (cliente) => {
    const {nombre, email, telefono, direccion} = cliente

    const [result] = await pool.query('INSERT INTO clientes (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)', [nombre, email, telefono, direccion])
    return result
}