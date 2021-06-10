import React, { useState } from 'react';
import { DataContext } from './DataContext';

import { useGetTrendingSearchTerms } from 'hooks/useGetTrendingSearchTerms';

const DataProvider = ({ children }) => {
  const initialLastSearch = localStorage.getItem('lastSearch') || null;
  const [lastSearch, setLastSearch] = useState(initialLastSearch);
  const { gifs: trendingTerms } = useGetTrendingSearchTerms();

  const data = {
    lastSearch,
    setLastSearch,
    trendingTerms,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
