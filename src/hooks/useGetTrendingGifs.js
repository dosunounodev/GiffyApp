import { useState, useEffect } from 'react';
import { getTrendingGifs } from 'services/getTrendingGifs';

const useGetTrendingGifs = ({ limit }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getTrendingGifs({ limit })
      .then((response) => setGifs(response))
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
    setLoading(false);
    setError(false);
  }, [limit]);

  return { loading, error, gifs };
};

export { useGetTrendingGifs };
