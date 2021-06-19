import React, { useState } from 'react';
import { LastSearchContext } from './LastSearchContext';

const LastSearchProvider = ({ children }) => {
  const initialLastSearch = localStorage.getItem('lastSearch') || null;
  const [lastSearch, setLastSearch] = useState(initialLastSearch);

  const data = {
    lastSearch,
    setLastSearch,
  };

  return (
    <LastSearchContext.Provider value={data}>
      {children}
    </LastSearchContext.Provider>
  );
};

export default LastSearchProvider;
