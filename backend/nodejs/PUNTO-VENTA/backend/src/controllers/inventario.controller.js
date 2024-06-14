import { validationResult } from "express-validator";
import { createInventario, deleteInventario, getAllInventarios, getVentaById, updateVenta } from "../models/inventario.model.js";


export const crearInventario = async(req, res)=> {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {id_producto, cantidad, tipo_movimiento, descripcion} = req.body

        const result = await createInventario ({id_producto, cantidad, tipo_movimiento, descripcion})
        res.status(201).json({message: 'Inventario exitosamente', Id: result.insertId})
    } catch (error) {
        res.status(500).json({message: 'Error'})
        
    }
}

export const getInventarios = async(req, res) => {
    try {
        const inventarios = await getAllInventarios()
        res.json(inventarios)
    } catch (error) {
        console.error('Error al obtener los inventarios:', error);
        res.status(500).json({ error: "Error al obtener los inventarios" });
    }
}

export const getUnInventario = async(req, res) => {
    try {
        const inventario = await getVentaById(req.params.id)

        if (!inventario) {
            return res.status(404).json({ error: 'Inventario no encontrado' });
        }
        res.json(inventario)
    } catch (error) {
        console.error('Error al obtener el inventario:', error);
        res.status(500).json({ error: "Error al obtener el inventario" });
    }
}

export const editInventario = async(req,res) =>{
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await updateInventario(req.params.id, req.body)

        if (result.affectedRows=== 0) {
            return res.status(404).json({ error: 'Venta no econtrada' });
        }

        res.json(result)
        res.json({message: "Inventario actualizado exitosamente"})

    } catch (error) {
        console.error('Error al actualizar el inventario:', error);
        res.status(500).json({ error: "Error al actualizar el inventario" });
    }
}

export const removeInventario = async(req,res) =>{
    try {
        const result = await deleteInventario(req.params.id)

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Inventario no encontrada' });
        }

        res.json({ message: 'Inventario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el inventario:', error);
        res.status(500).json({ error: "Error al eliminar el inventario" });
    }
} 