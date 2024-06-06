import { pool } from "../db.js";

//Crear venta
export const createVentas = async(ventas) => {
    const {id_usuario, id_cliente, total} = ventas
    const [result] = await pool.query('INSERT INTO ventas (id_usuario, id_cliente, total) VALUES (?, ?, ?)', [id_usuario, id_cliente, total])
    return result
}