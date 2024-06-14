import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Implement form submission logic here
    };

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Iniciar Sesion</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

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
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200 transition duration-300 ease-in-out hover:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login