import { validationResult } from "express-validator";
import { createCliente, getAllCliente, getByIdCliente, updateCliente, deleteCliente } from "../models/cliente.model.js";

//registro cliente
export const registerCliente = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { nombre, email, telefono, direccion } = req.body

        const result = await createCliente({ nombre, email, telefono, direccion })
        res.status(201).json({ message: 'Cliente creado exitosamente', userId: result.insertId })
    } catch (error) {
        res.status(500).json({ message: "Error" })
    }
}

export const getClientes = async (req, res) => {
    try {
        const clientes = await getAllCliente()
        res.json(clientes)
    } catch (error) {
        console.error('Error al obtener los clientes registrados:', error);
        res.status(500).json({ error: "Error al obtener clientes registrados" });
    }

}

export const getIdCliente = async (req, res) => {
    try {
        const UnCliente = await getByIdCliente(req.params.id)
        
        if (!UnCliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(UnCliente)

    } catch (error) {
        console.error('Error al obtener el cliente registrado:', error);
        res.status(500).json({ error: "Error al obtener el cliente registrado" });
    }
}

export const editCliente = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await updateCliente( req.params.id, req.body)

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.json({ message: 'Cliente actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ error: "Error al actualizar el cliente" });
    }

}

export const removeCliente = async(req, res) => {
    try {
        const result = await  deleteCliente(req.params.id)

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }  
        res.json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ error: "Error al eliminar el cliente" });
    }
}