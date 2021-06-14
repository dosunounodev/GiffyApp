import { useState, useEffect } from 'react';
import { getGifs } from 'services/getGifs';

const INITIAL_PAGE = 0;

const useGetGifsByKeyword = ({ keyword, limit = '' } = {}) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getGifs({ keyword, limit })
      .then((response) => setGifs(response))
      .then(setLoading(false))
      .then(setError(false))
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, [keyword, limit]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoading(true);

    getGifs({ keyword, limit, page })
      .then((response) => setGifs((prevGifs) => [...prevGifs, ...response]))
      .then(setLoading(false))
      .then(setError(false))
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, [keyword, limit, page]);

  return { loading, error, gifs, setPage };
};

export { useGetGifsByKeyword };
