import React, { useState } from 'react';
import api from '../../api/api';


const AddInventario = () => {
    const [formData, setFormData] = useState({
        id_producto: '',
        cantidad: '',
        tipo_movimiento: '',
        descripcion: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/register-inventario', formData);

            if (response.status === 201) {
                setSuccess('Producto añadido al inventario con éxito!');
                setError(null);
                setFormData({
                    id_producto: '',
                    cantidad: '',
                    tipo_movimiento: '',
                    descripcion: ''
                });
            } else {
                setError(response.data.message || 'Error añadiendo producto al inventario.');
                setSuccess(null);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Error añadiendo producto al inventario.');
            setSuccess(null);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">


            <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Añadir Producto al Inventario</h2>
                    {error && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{error}</div>}
                    {success && <div className="bg-green-100 text-green-800 p-2 rounded mb-4">{success}</div>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="id_producto" className="block text-gray-700">Codigo del producto</label>
                                <input
                                    type="text"
                                    id="id_producto"
                                    name="id_producto"
                                    value={formData.id_producto}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="nombre" className="block text-gray-700">Cantidad</label>
                                <input
                                    type="text"
                                    id="cantidad"
                                    name="cantidad"
                                    value={formData.cantidad}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="tipo_movimiento" className="block text-gray-700">Tipo de movimiento</label>
                                <select
                                    id="tipo_movimiento"
                                    name="tipo_movimiento"
                                    value={formData.tipo_movimiento}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                                >
                                    <option value="entrada">Entrada</option>
                                    <option value="salida">Salida</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="direccion" className="block text-gray-700">Descripcion</label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            Añadir producto al inventario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInventario;