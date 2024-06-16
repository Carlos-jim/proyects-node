import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar-cajero';

const AddClient = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
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
      const response = await axios.post('http://localhost:5000/api/clients', formData);

      if (response.status === 201) {
        setSuccess('Cliente añadido con éxito!');
        setError(null);
        setFormData({
          cedula: '',
          nombre: '',
          email: '',
          telefono: '',
          direccion: ''
        });
      } else {
        setError(response.data.message || 'Error añadiendo cliente.');
        setSuccess(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error añadiendo cliente.');
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Añadir Cliente</h2>
          {error && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{error}</div>}
          {success && <div className="bg-green-100 text-green-800 p-2 rounded mb-4">{success}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cedula" className="block text-gray-700">Cedula</label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                  required
                />
              </div>
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
                <label htmlFor="email" className="block text-gray-700">Correo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="direccion" className="block text-gray-700">Dirección</label>
                <textarea
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
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
              Añadir Cliente
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClient;

