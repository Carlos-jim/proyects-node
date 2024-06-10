import { pool } from "../db.js";


export const createInventario = async(inventario) => {
    const {id_producto, cantidad, tipo_movimiento, descripcion} = inventario
    const [result] = await pool.query('INSERT INTO inventario (id_producto, cantidad, tipo_movimiento, descripcion) VALUES (?, ?, ?, ?)', [id_producto, cantidad, tipo_movimiento, descripcion])
    return result
}

export const getAllInventarios = async() => {
    const [rows] = await pool.query('SELECT * FROM inventario') 
    return rows
}

export const getVentaById = async(id) => {
    const [rows] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [id])
    return rows[0]
}

export const updateVenta = async(id, inventario) => {
    const {id_producto, cantidad, tipo_movimiento, descripcion} = inventario
    const [result] = await pool.query('UPDATE ventas SET id_producto = ?, cantidad = ?, tipo_movimiento = ?, descripcion = ?  WHERE id_inventario = ?', [id_producto, cantidad, tipo_movimiento, descripcion, id])
    return result
}

export const deleteVenta = async(id) =>{
    const [result] = await pool.query('DELETE * FROM inventario WHERE id_inventario = ?', [id])
    return result
}