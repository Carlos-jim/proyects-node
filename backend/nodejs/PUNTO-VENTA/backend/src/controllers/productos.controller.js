import { validationResult } from "express-validator";
import { createProducto, getAllProductos, getProductoById, updateProducto, deleteProducto} from "../models/productos.model.js"


//Crear producto 
export const crearProducto = async(req, res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {nombre, descripcion, precio, stock, id_categoria} = req.body

        const result = await createProducto({nombre, descripcion, precio, stock, id_categoria})
        res.status(201).json({message: 'Producto creado exitosamente'})
    
    } catch (error) {
        res.status(500).json({message: 'Error'})
    }
} 

//Obtener todos los productos
export const getProductos = async(req, res) => {
    try {
        const productos = await getAllProductos
        res.json(productos)
    } catch (error) {
        console.error('Error al obtener los productos registrados:', error);
        res.status(500).json({ error: "Error al obtener los productos registrados" });
    }
}

//Obtebner un producto
export const getUnProducto = async(req, res) =>{
    try {
        const UnProducto = getProductoById(req.params.id)
        
        if (!UnProducto) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(UnProducto)
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
}

//Editar productos
export const editProducto = async(req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const result = await updateProducto(req.params.id, req.body)
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Productos actualizados exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
}


//Eliminar productos
export const removeProducto = async(req,res) => {
    try {
        const result = deleteProducto(req.params.id)
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar los productos:', error);
        res.status(500).json({ error: "Error al eliminar los productos" });
    }
}

