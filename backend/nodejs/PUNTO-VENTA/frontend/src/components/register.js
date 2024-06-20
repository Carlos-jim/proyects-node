import React, { useState } from 'react';
import api from '../api/api.js'; // Asegúrate de importar la configuración de Axios

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    rol: 'admin',
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
      const response = await api.post('/register', formData);
      setSuccess('Usuario registrado con éxito');
      console.log('User registered:', response.data);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error de servidor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Registrar Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <label htmlFor="contrasena" className="block text-gray-700">Contraseña</label>
            <input
              type="contrasena"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="rol" className="block text-gray-700">Rol</label>
            <select
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
            >
              <option value="admin">Admin</option>
              <option value="cajero">Cajero</option>
            </select>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Registrar Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
