import React from 'react';
import DataTable from '../all-users/datatable';
import GlobalFilter from '../all-users/GlobalFilter';
import api from '../../api/api';
import Sidebar from './sidebar-cajero';

const fetchProduct = async() => {
    const response = await api.post('http://localhost:3000/api/obtener-productos')
    return response.data
}

const ProductTable = () => {
    const columns = React.useMemo(
      () => [
        {
          Header: 'Nombre',
          accessor: 'nombre',
        },
        {
          Header: 'Descripcion',
          accessor: 'descripcion',
        },
        {
          Header: 'Precio',
          accessor: 'precio',
        },
        {
          Header: 'Stock',
          accessor: 'stock',
        },
      ],
      []
    );
  
    return (
      <div className="min-h-screen flex flex-col md:flex-row">
        <Sidebar />
        <DataTable columns={columns} fetchData={fetchProduct} GlobalFilterComponent={GlobalFilter} />
      </div>
    );
  };
  
  export default ProductTable;