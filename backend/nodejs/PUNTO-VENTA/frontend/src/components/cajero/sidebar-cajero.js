import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientsSubmenuOpen, setClientsSubmenuOpen] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleClientsSubmenu = () => {
    setClientsSubmenuOpen(!clientsSubmenuOpen);
  };

  const toggleProductsSubmenu = () => {
    setProductsSubmenuOpen(!productsSubmenuOpen);
  };

  return (
    <div>
      {/* Menú para dispositivos móviles */}
      <div className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="text-2xl font-bold">Sistema de Facturación</div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Menú lateral - Versión móvil */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
        <div className="p-4 text-2xl font-bold text-center">Sistema de Facturación</div>
        <nav className="mt-10">
          <Link
            to="/add-client"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Facturar
          </Link>
          <button
            onClick={toggleClientsSubmenu}
            className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Clientes
          </button>
          {clientsSubmenuOpen && (
            <div className="ml-4">
              <Link
                to="/lista-clientes"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Lista de Clientes
              </Link>
              <Link
                to="/añadir-clientes"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Añadir Cliente
              </Link>
            </div>
          )}
          <button
            onClick={toggleProductsSubmenu}
            className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Productos
          </button>
          {productsSubmenuOpen && (
            <div className="ml-4">
              <Link
                to="/products"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Lista de Productos
              </Link>
              <Link
                to="/add-product"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Añadir Producto
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Menú lateral - Versión escritorio */}
      <div className="hidden md:block h-screen w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold text-center">
          Sistema de Facturación
        </div>
        <nav className="mt-10">
          <Link
            to="/add-client"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Facturar
          </Link>
          <button
            onClick={toggleClientsSubmenu}
            className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Clientes
          </button>
          {clientsSubmenuOpen && (
            <div className="ml-4">
              <Link
                to="/lista-clientes"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Lista de Clientes
              </Link>
              <Link
                to="/añadir-cliente"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Añadir Cliente
              </Link>
            </div>
          )}
          <button
            onClick={toggleProductsSubmenu}
            className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Productos
          </button>
          {productsSubmenuOpen && (
            <div className="ml-4">
              <Link
                to="/products"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Lista de Productos
              </Link>
              <Link
                to="/add-product"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Añadir Producto
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
