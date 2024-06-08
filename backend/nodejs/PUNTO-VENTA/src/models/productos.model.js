import { pool } from "../db.js";

//Crear producto
export const createProducto = async(producto) => {
    const {nombre, descripcion, precio, stock, id_categoria} = producto
    const [result] = await pool.query('INSERT INTO productos (nombre, descripcion, precio, stock, id_categoria) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, stock, id_categoria])
     return result
}

export const getAllProductos = async() => {
    const [rows] = await pool.query('SELECT * FROM productos')
    return rows
}

export const getProductoById = async(id) => {
    const [rows] = await pool.query('SELECT * FROM  producto WHERE id_producto = ?', [id])
    return rows[0]
}

export const updateProducto = async(id, producto) => {
    const {nombre, descripcion, precio,stock,id_categoria} = producto
    const [result] = await pool.query('UPDATE clientes SET nombre = ?, descripcion = ?, precio = ?, stock = ?, id_categoria = ? WHERE id_producto = ?', [nombre, descripcion, precio, stock, id_categoria, id])
    return result
} 

export const deleteProducto = async(id) => {
    const [result] = await pool.query('DELETE FROM producto WHERE id_producto = ?', [id])
    return result
}