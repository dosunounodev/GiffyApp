const API_KEY = 'MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM';

const getTrendingSearchTerms = async () => {
  const res = await fetch(
    `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`
  );
  const json = await res.json();
  console.log(json);
  const { data } = json;
  return data;
};

export { getTrendingSearchTerms };
