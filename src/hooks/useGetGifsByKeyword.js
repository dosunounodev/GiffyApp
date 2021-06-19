import { useState, useEffect } from 'react';
import { getGifs } from 'services/getGifs';

const INITIAL_PAGE = 0;

const useGetGifsByKeyword = ({ keyword, limit = '', rating } = {}) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getGifs({ keyword, limit, rating })
      .then((response) => {
        setGifs(response);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, [keyword, limit, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingMore(true);
    getGifs({ keyword, limit, page, rating })
      .then((response) => {
        setGifs((prevGifs) => [...prevGifs, ...response]);
        setLoadingMore(false);
        setError(false);
      })
      .catch((e) => {
        setLoadingMore(false);
        setError(true);
      });
  }, [keyword, limit, rating, page]);

  return { loading, loadingMore, error, gifs, setPage };
};

export { useGetGifsByKeyword };
