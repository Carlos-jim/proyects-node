// GlobalFilter.js
import React from 'react';

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

export default GlobalFilter;
