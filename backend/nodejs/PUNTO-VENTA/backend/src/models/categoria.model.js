import { pool } from "../db.js";


//Categoria del producto
export const createCategoria = async(categoria) => {
    const {nombre, descripcion} = categoria

    const [result] = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion])

    return result
}

//Obtener todas las categorias
export const getAllCategorias = async() =>  {
    const [rows] = await pool.query('SELECT * FROM  categorias')
    return rows
}

//Obtener una sola categorias
export const getCategoriasById = async(id) => {
    const [rows] = await pool.query( 'SELECT * FROM  categorias WHERE id_categoria = ?', [id])
    return rows[0]
}

//Actualizar categoria
export const updateCategoria = async(id, categoria) => {
    const {nombre, descripcion} = categoria
    const [result] = await pool.query('UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?', [nombre, descripcion, id])
    return result
}

export const deleteCategoria = async(id) => {
    const [result] = await pool.query('DELETE FROM categorias WHERE id_categoria = ?', [id])
    return result
}