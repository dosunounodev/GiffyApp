import { useState, useEffect } from 'react';
import { getGifById } from 'services/getGifById';

const useGetGifById = ({ gifId }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGifById({ gifId }).then((response) => setGifs(response));
    setLoading(false);
  }, [gifId]);

  return { loading, gifs };
};

export { useGetGifById };
