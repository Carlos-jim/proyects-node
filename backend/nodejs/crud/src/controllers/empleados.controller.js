import { pool } from '../db.js'

export const getEmpleados = async (req, res) => {
    const [rows] =  await pool.query('SELECT * FROM empleados')
    res.json(rows)
}

export const getEmpleado = async (req, res) => {
   const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])

   if (rows.length <=0)  return res.status(404).json( {
        message: 'Empleado no encontrado'
   })
   res.json(rows[0])
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
