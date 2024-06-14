import { pool } from "../db";

export const createDetalleventa = async(detalle_venta) => {
    const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = detalle_venta
    const [result] = await pool.query('INSERT INTO ventas (id_venta, id_producto, cantidad, precio_unitario, subtotal) VALUES (?, ?, ?, ?,?)', [id_venta, id_producto, cantidad, precio_unitario, subtotal])
    return result
}

export const getAllDetallesVentas = async() => {
    const  [result] = await pool.query('SELECT * FROM detalles_ventas')
    return result
}

export const getDetalleVentaById = async(id) => {
    const [result] = await pool.query('SELECT * FROM detalles_ventas WHERE id_detalle = ?', [id])
    return result[0]
}

export const updateDetalleVenta = async(id, detalle_venta) =>{
    const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = detalle_venta

    const [result] = await pool.query('UPDATE detalles_ventas SET id_venta = ?, id_producto = ?, cantidad = ?, precio_unitario = ?, subtotal = ? WHERE id_detalle = ?', [id_venta, id_producto, cantidad, precio_unitario, subtotal, id, detalle_venta])
    return result
}

export const deleteDetalleVenta = async(id) => {
     const [result] = await pool.query('DELETE * FROM detalles_ventas WHERE id_detalle = ?', [id])
     return result
}
