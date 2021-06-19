import { useGetTrendingSearchTerms } from 'hooks/useGetTrendingSearchTerms';
import React, { useState } from 'react';
import { DataContext } from './DataContext';

const DataProvider = ({ children }) => {
  const initialLastSearch = localStorage.getItem('lastSearch') || null;
  const [lastSearch, setLastSearch] = useState(initialLastSearch);

  const {
    terms: trendingTerms,
    loading: loadingTrendingTerms,
    error: errorTrendingTerms,
  } = useGetTrendingSearchTerms();

  const data = {
    lastSearch,
    setLastSearch,
    trendingTerms,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
