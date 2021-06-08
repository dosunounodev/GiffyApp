import { useState, useEffect } from 'react';
import { getTrendingSearchTerms } from 'services/getTrendingSearchTerms';

const useGetTrendingSearchTerms = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingSearchTerms().then((response) => setGifs(response));
    setLoading(false);
  }, []);

  return { loading, gifs };
};

export { useGetTrendingSearchTerms };
