import { validationResult } from "express-validator";
import { createDetalleventa } from "../models/detalle_venta.model";

export const creartDetalleventa = async(req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {id_venta, id_producto, cantidad, precio_unitario, subtotal} = req.body

        const result = await createDetalleventa({id_venta, id_producto, cantidad, precio_unitario, subtotal})
        res.status(201).json({message: 'Detalle venta registrada'})
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
}