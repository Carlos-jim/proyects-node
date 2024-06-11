import { validationResult } from "express-validator";
import {createVentas, getAllVentas, getVentasById, updateVenta, deleteVenta} from '../models/ventas.model.js'

export const crearVentas = async(req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {id_usuario, id_cliente, total} = req.body

        const result = await createVentas({id_usuario, id_cliente, total})
        res.status(201).json({message: 'Venta realizada'})
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
}

export const getVentas = async(req, res) => {
    try {
        const ventas = await getAllVentas()
        
        res.json(ventas)
    } catch (error) {
        console.error('Error al obtener todas las ventas:', error);
        res.status(500).json({ error: "Error al obtener todas las ventas" });
    }
}

export const getUnaVenta = async(req, res) => {
    try {
        const venta = await getVentasById(req.params.id)

        if (!venta) {
            return res.status(404).json({ error: 'Venta no encontrada' });
        }
        res.json(venta)
    } catch (error) {
        console.error('Error al obtener al venta:', error);
        res.status(500).json({ error: "Error al obtener al venta" });
    }
}

export const editVenta = async(req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await updateVenta(req.params.id, req.body)
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Venta no econtrada' });

        }

        res.json({ message: 'Venta actualizada exitosamente' });
    } catch (error) {
        console.error('Error al actualizar la venta:', error);
        res.status(500).json({ error: "Error al actualizar la venta" });
    }
}

export  const removeVenta =async(req, res) => {
    try {
        const result = await deleteVenta(req.params.id)

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Venta no encontrada' });
        }  
        res.json({ message: 'Venta eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar la venta:', error);
        res.status(500).json({ error: "Error al eliminar la venta" });
    }
}