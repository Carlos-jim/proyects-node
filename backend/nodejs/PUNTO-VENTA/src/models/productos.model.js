import { pool } from "../db.js";

//Crear producto
export const createProducto = async(producto) => {
    const {nombre, descripcion, precio, stock, id_categoria} = producto
    const [result] = await pool.query('INSERT INTO productos (nombre, descripcion, precio, stock, id_categoria) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, stock, id_categoria])
     return result
}