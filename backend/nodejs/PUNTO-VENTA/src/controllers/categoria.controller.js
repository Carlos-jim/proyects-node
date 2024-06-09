import { validationResult } from "express-validator";
import { createCategoria, deleteCategoria, getAllCategorias, getCategoriasById, updateCategoria} from "../models/categoria.model.js"

//Controlador crear categoria del producto
export const crearCategoria = async(req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {nombre, descripcion} = req.body

        const result = await createCategoria({nombre, descripcion})
        res.status(201).json({message: 'Categoria creada exitosamente', categoriaId: result.insertId})
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
}

export const getCategorias = async(req,res) => {
    try {
        const categorias = await getAllCategorias()
        res.json(categorias)
    } catch (error) {
        console.error('Error al obtener las categorias registradas:', error);
        res.status(500).json({ error: "Error al obtener las categorias registradas" });
    }
}

export const getUnaCategoria = async(req, res) => {
    try {
        const UnaCategoria = await getCategoriasById(req.params.id)
        if (!UnaCategoria) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(UnaCategoria)
    } catch (error) {
        console.error('Error al obtener la categoria registrada:', error);
        res.status(500).json({ error: "Error al obtener al obtener la categoria" });
    }
}


export const editCategoria = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await updateCategoria(req.params.id, req.body)

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoria no encontrado' });
        }

        res.json({ message: 'Categoria actualizada exitosamente' });
    } catch (error) {
        console.error('Error al actualizar la categoria:', error);
        res.status(500).json({ error: "Error al actualizar la categoria" });
    }
}

export const removeCategoria = async (req, res) => {
    try {
        const  result = await deleteCategoria(req.params.id)

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoria no encontrada' });
        }
        res.json({ message: 'Categoria eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar la categoria:', error);
        res.status(500).json({ error: "Error al eliminar la categoria" });
    }
}