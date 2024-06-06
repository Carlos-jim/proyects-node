import { pool } from "../db.js"


//Crear cliente
export const createCliente = async (cliente) => {
    const { nombre, email, telefono, direccion } = cliente

    const [result] = await pool.query('INSERT INTO clientes (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)', [nombre, email, telefono, direccion])
    return result
}

//Seleccionar todos los clientes 
export const getAllCliente = async () => {
    const [rows] = await pool.query('SELECT * FROM clientes')
    return rows
}


//Obtenr por id cliente 
export const getByIdCliente = async (id) => {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE  id_cliente = ?', [id])
    return rows[0]
} 