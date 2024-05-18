import { pool } from '../db.js'
import bcrypt from 'bcryptjs'  

export const postUser = async (req, res ) => {
    try {
        // Ruta de registro de usuario
    const { nombre, email, contraseña } = req.body;
        //Si no hay datos, retorna completar datos
    if (!nombre || !email || !contraseña) {
      return res.status(400).send('Por favor, completa todos los campos');
    }
  
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);
  
    // Insertar usuario en la base de datos
    const sql = 'INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)';
    pool.query(sql, [nombre, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send('Error en el servidor');
      }
      res.status(201).send('Usuario registrado');
    });

        
    } catch (error) {
        return res.status(500).json({message: 'Ha ocurrido un error'})
    }
}