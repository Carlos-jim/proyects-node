import { pool } from "../db.js";

//Crear venta
export const createVentas = async(ventas) => {
    const {id_usuario, id_cliente, total} = ventas
    const [result] = await pool.query('INSERT INTO ventas (id_usuario, id_cliente, total) VALUES (?, ?, ?)', [id_usuario, id_cliente, total])
    return result
}

export const getAllVentas = async() => {
    const [rows] = await pool.query('SELECT * FROM  ventas')
    return rows
}

export const getVentasById  = async(id) =>{
    const [rows] = await pool.query('SELECT * FROM ventas WHERE id_venta = ?', [id])
    return rows[0]
}

export const updateVenta = async(id, venta) => {
    const {id_usuario, id_cliente, total} = venta
    const [result] = await pool.query('UPDATE ventas SET id_usuario = ?, id_cliente = ?, total = ? WHERE id_venta = ?', [id_usuario, id_cliente, total, id])
    return result
}

export const deleteVenta = async(id) => {
    const [result] = await pool.query('DELETE * FROM venta WHERE id_venta = ?', [id])
    return result
}