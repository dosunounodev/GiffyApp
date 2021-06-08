import { useState, useEffect } from 'react';
import { getGifs } from 'services/getGifs';

const useGetGifsByKeyword = ({ keyword, limit=10 }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGifs({ keyword, limit })
      .then((response) => setGifs(response))
      .then(setLoading(false));
  }, [keyword, limit]);

  return { loading, gifs };
};

export { useGetGifsByKeyword };
