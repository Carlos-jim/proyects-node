import { pool } from "../db.js";

export const createCategoria = async (categoria) => {
    const { nombre, descripcion } = categoria

    const [result] = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion])

    return result
}