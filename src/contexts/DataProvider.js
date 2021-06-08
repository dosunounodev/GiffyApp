import React, { useState } from 'react';
import { DataContext } from './DataContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import { useGetTrendingGifs } from 'hooks/useGetTrendingGifs';
import { useGetTrendingSearchTerms } from 'hooks/useGetTrendingSearchTerms';

const LastSearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const { gifs, loading } = useGetGifsByKeyword({ keyword, limit: 5 });

  const initialLastSearch = localStorage.getItem('lastSearch') || null;
  const [lastSearch, setLastSearch] = useState(initialLastSearch);
  const { gifs: lastSearchGifs } = useGetGifsByKeyword({
    keyword: lastSearch || '',
    limit: 5,
  });

  const { gifs: trendingGifs } = useGetTrendingGifs({
    limit: 10,
  });
  const { gifs: trendingTerms } = useGetTrendingSearchTerms();

  const data = {
    keyword,
    setKeyword,
    gifs,
    loading,
    lastSearch,
    setLastSearch,
    lastSearchGifs,
    trendingGifs,
    trendingTerms,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default LastSearchProvider;
