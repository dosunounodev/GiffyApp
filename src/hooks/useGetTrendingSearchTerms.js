import { useState, useEffect } from 'react';
import { getTrendingSearchTerms } from 'services/getTrendingSearchTerms';

const useGetTrendingSearchTerms = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getTrendingSearchTerms()
      .then((response) => {
        setTerms(response);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { loading, error, terms };
};

export { useGetTrendingSearchTerms };
