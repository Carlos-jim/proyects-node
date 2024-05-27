import { pool } from "../db.js";


export const createInventario = async(inventario) => {
    const {id_producto, cantidad, tipo_movimiento, descripcion} = inventario
    const [result] = await pool.query('INSERT INTO inventario (id_producto, cantidad, tipo_movimiento, descripcion) VALUES (?, ?, ?, ?)', [id_producto, cantidad, tipo_movimiento, descripcion])
    return result
}