import { validationResult } from "express-validator";
import { createDetalleventa, getAllDetallesVentas, getDetalleVentaById, updateDetalleVenta, deleteDetalleVenta } from "../models/detalle_venta.model";

export const creartDetalleventa = async(req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = req.body

        const result = await createDetalleventa({id_venta, id_producto, cantidad, precio_unitario, subtotal})
        res.status(201).json({message: 'Detalle venta registrada'})
        res.json(result)
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
}

export const getDetallesVentas = async(req,res) =>{
    try {
        const detalles_ventas = await getAllDetallesVentas()
        res.json(detalles_ventas)
    } catch (error) {
        console.error('Error al obtener los detalles de las ventas:', error);
        res.status(500).json({ error: "Error al obtener los detalles de las ventas" });
    }
}

export const getUnDetalleVenta = async(req,res) =>{
    try {
        const detalle_venta = await getDetalleVentaById(req.params.id)
        
        if (!detalle_venta) {
            return res.status(404).json({ error: 'Detalle de la venta no encontrada' });
        }

        res.json(detalle_venta)
    } catch (error) {
        console.error('Error al obtener el detalle de la venta:', error);
        res.status(500).json({ error: "Error al obtener el detalle de la venta" });
    }
}

export const editDetalleVenta = async(req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const result = await updateDetalleVenta(req.body, req.params.id)

        if (result.affectedRows === 0 ) {
            return res.status(404).json({ error: 'Detalle de la venta no encontrada' });
        }

        res.json({ message: 'Detalle de venta actualizada exitosamente' });
        res.json(re)
    } catch (error) {
        console.error('Error al actualizar el detalle de la venta:', error);
        res.status(500).json({ error: "Error al actualizar el detalle de la venta" });
    }
    
}

export const removeDetalleVenta = async(req, res) => {
    const result = await deleteDetalleVenta(req.params.id)
    try {
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Detalle de la venta no encontrada' });
        }
    
        res.json({ message: 'Detalle de venta eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el detalle de la venta:', error);
        res.status(500).json({ error: "Error al eliminar el detalle de la venta" });
    }

}