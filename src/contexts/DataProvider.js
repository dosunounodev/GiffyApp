import React, { useState } from 'react';
import { DataContext } from './DataContext';

const DataProvider = ({ children }) => {
  const initialLastSearch = localStorage.getItem('lastSearch') || null;
  const [lastSearch, setLastSearch] = useState(initialLastSearch);

  const data = {
    lastSearch,
    setLastSearch,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
