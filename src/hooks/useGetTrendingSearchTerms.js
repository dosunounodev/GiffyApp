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
      .then((response) => setTerms(response))
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
    setLoading(false);
    setError(false);
  }, []);

  return { loading, error, terms };
};

export { useGetTrendingSearchTerms };
