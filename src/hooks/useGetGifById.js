import { useState, useEffect } from 'react';
import { getGifById } from 'services/getGifById';

const useGetGifById = ({ gifId }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getGifById({ gifId })
      .then((response) => setGifs(response))
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
    setLoading(false);
    setError(false);
  }, [gifId]);

  return { loading, error, gifs };
};

export { useGetGifById };
