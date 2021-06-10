import { API_URL, API_KEY } from 'services/settings';

const getTrendingSearchTerms = async () => {
  const res = await fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`);
  const json = await res.json();
  const { data } = json;
  return data;
};

export { getTrendingSearchTerms };
