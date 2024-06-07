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


//Obtener por id cliente 
export const getByIdCliente = async (id) => {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE  id_cliente = ?', [id])
    return rows[0]
} 


//Editar cliente
export const updateCliente = async (id, cliente) => {
    const {nombre, email, telefono, direccion} = cliente
    const [result] = await pool.query('UPDATE clientes SET nombre = ?, email = ?, telefono = ?, direccion = ? WHERE id_cliente = ?', [nombre, email, telefono, direccion, id])
    return result
}

export const deleteCliente = async(id) => {
    const [result] = await pool.query('DELETE FROM clientes WHERE id_cliente = ?', [id]);
    return result;
}