import { pool } from '../db.js'

export const getEmpleados = async (req, res) => {
    const [rows] =  await pool.query('SELECT * FROM empleados')
    res.json(rows)
}

export const postEmpleados = async (req, res) => {
    const { nombre, salario } = req.body;
    const [rows] = await pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
    res.send({
        id: rows.insertId,
        nombre,
        salario,
    }
    )
}
export const putEmpleados = (req, res) => res.send('.')
export const deleteEmpleados = (req, res) => res.send('.')
