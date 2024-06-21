import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import Sidebar from '../../components/cajero/sidebar-cajero';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    id_categoria: '' // Añade el campo para la categoría
  });

  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Obtener las categorías cuando el componente se monte
    const fetchCategorias = async () => {
      try {
        const response = await api.get('/obtener-categorias');
        setCategorias(response.data);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategorias();
  }, []);

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
      const response = await api.post('/crear-producto', formData);

      if (response.status === 201) {
        setSuccess('Producto añadido con éxito!');
        setError(null);
        setFormData({
          nombre: '',
          precio: '',
          descripcion: '',
          id_categoria: '' 
        });
      } else {
        setError(response.data.message || 'Error añadiendo producto.');
        setSuccess(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error añadiendo producto.');
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Añadir Producto</h2>
          {error && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{error}</div>}
          {success && <div className="bg-green-100 text-green-800 p-2 rounded mb-4">{success}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="precio" className="block text-gray-700">Precio</label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="id_categoria" className="block text-gray-700">Categoría</label>
                <select
                  id="id_categoria"
                  name="id_categoria"
                  value={formData.id_categoria}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                  required
                >
                  <option value="">Seleccione una categoría</option>
                  {categorias.map(categoria => (
                    <option key={categoria.id_categoria} value={categoria.id_categoria}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="descripcion" className="block text-gray-700">Descripción</label>
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
              Añadir producto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
