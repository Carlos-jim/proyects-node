import { pool } from "../db.js";

//Crear producto
export const createProducto = async(producto) => {
    const {nombre, descripcion, precio, stock, id_categoria} = producto
    const [result] = await pool.query('INSERT INTO productos (nombre, descripcion, precio, stock, id_categoria) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, stock, id_categoria])
     return result
}


//Obtener productos y nombre de la categoria
export const getAllProductos = async() => {
    const [rows] = await pool.query(`
        SELECT p.id_producto, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS categoria
        FROM productos p
        LEFT JOIN categorias c ON p.id_categoria = c.id_categoria
    `);
    return rows;
}


//Obtener producto por Id (uno)
export const getProductoById = async(id) => {
    const [rows] = await pool.query('SELECT * FROM  producto WHERE id_producto = ?', [id])
    return rows[0]
}

//Editar producto
export const updateProducto = async(id, producto) => {
    const {nombre, descripcion, precio,stock,id_categoria} = producto
    const [result] = await pool.query('UPDATE clientes SET nombre = ?, descripcion = ?, precio = ?, stock = ?, id_categoria = ? WHERE id_producto = ?', [nombre, descripcion, precio, stock, id_categoria, id])
    return result
} 

//Eliminar producto
export const deleteProducto = async(id) => {
    const [result] = await pool.query('DELETE FROM producto WHERE id_producto = ?', [id])
    return result
}