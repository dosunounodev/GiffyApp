import { useState, useEffect } from 'react';
import { getTrendingGifs } from 'services/getTrendingGifs';

const useGetTrendingGifs = ({ limit }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingGifs({ limit }).then((response) => setGifs(response));
    setLoading(false);
  }, [limit]);

  return { loading, gifs };
};

export { useGetTrendingGifs };
