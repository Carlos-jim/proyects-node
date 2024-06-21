import React from 'react';
import DataTable from '../all-users/datatable';
import GlobalFilter from '../all-users/GlobalFilter';
import api from '../../api/api';
import Sidebar from './sidebar-cajero';

const fetchClients = async () => {
  const response = await api.get('http://localhost:3000/api/obtener-clientes');
  return response.data;
};

const ClientTable = () => {
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

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <DataTable columns={columns} fetchData={fetchClients} GlobalFilterComponent={GlobalFilter} />
    </div>
  );
};

export default ClientTable;
