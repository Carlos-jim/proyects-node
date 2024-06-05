import { pool } from "../db";

export const createDetalleventa = async(detalle_venta) => {
    const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = detalle_venta
    const [result] = await pool.query('INSERT INTO ventas (id_venta, id_producto, cantidad, precio_unitario, subtotal) VALUES (?, ?, ?, ?,?)', [id_venta, id_producto, cantidad, precio_unitario, subtotal])
    return result
}