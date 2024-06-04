import { pool } from "../db.js";


//Categoria del producto
export const createCategoria = async(categoria) => {
    const {nombre, descripcion} = categoria

    const [result] = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion])

    return result
}

//Crear producto
export const createProducto = async(producto) => {
    const {nombre, descripcion, precio, stock, id_categoria} = producto
    const [result] = await pool.query('INSERT INTO productos (nombre, descripcion, precio, stock, id_categoria) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, stock, id_categoria])
     return result
}