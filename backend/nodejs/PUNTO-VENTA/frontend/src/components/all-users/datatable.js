import React, { useState, useEffect } from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';

const DataTable = ({ columns, fetchData, GlobalFilterComponent }) => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('recent');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchDataAsync();
  }, [fetchData]);

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    setData((prevData) => 
      [...prevData].sort((a, b) => 
        order === 'recent' ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt)
      )
    );
  };

  const tableData = React.useMemo(() => data, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data: tableData }, useGlobalFilter, useSortBy);

  return (
    <div className="flex-1 flex flex-col p-8 bg-gray-100">
      {error && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{error}</div>}
      <div className="flex justify-between items-center mb-4">
        {GlobalFilterComponent && (
          <GlobalFilterComponent globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
        )}
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
  );
};

export default DataTable;
