import React, { useState, useEffect } from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import axios from 'axios';
import Sidebar from '../../components/sidebar-cajero';

// Barra de Búsqueda
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      Search:{' '}
      <input
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        className="border p-2 rounded"
        placeholder="Buscar..."
      />
    </span>
  );
};

const ClientTable = () => {
  const [clients, setClients] = useState([]);
  const [sortOrder, setSortOrder] = useState('recent'); // Ordenar por reciente o más viejo
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clients');
        setClients(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchClients();
  }, []);

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    if (order === 'recent') {
      setClients((prevClients) =>
        [...prevClients].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else {
      setClients((prevClients) =>
        [...prevClients].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    }
  };

  const data = React.useMemo(() => clients, [clients]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Cédula',
        accessor: 'cedula',
      },
      {
        Header: 'Nombre',
        accessor: 'nombre',
      },
      {
        Header: 'Teléfono',
        accessor: 'telefono',
      },
      {
        Header: 'Dirección',
        accessor: 'direccion',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Lista de Clientes</h2>
        {error && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{error}</div>}
        <div className="flex justify-between items-center mb-4">
          <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
          <div>
            <button
              onClick={() => handleSortOrderChange('recent')}
              className={`p-2 rounded ${sortOrder === 'recent' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Añadidos Recientemente
            </button>
            <button
              onClick={() => handleSortOrderChange('old')}
              className={`p-2 rounded ml-2 ${sortOrder === 'old' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Más Viejos
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="min-w-full bg-white">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 font-semibold text-gray-700 tracking-wider"
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-2 border-b border-gray-300 text-sm"
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
