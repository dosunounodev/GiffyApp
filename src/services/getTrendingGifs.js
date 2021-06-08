const API_KEY = 'MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM';

const getTrendingGifs = async ({ limit = 10 } = {}) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g`
  );
  const json = await res.json();
  const { data } = json;
  const gifs = data.map((gif) => {
    const { id, images, title } = gif;
    const url = images.downsized_medium.url;
    return { id, title, url };
  });
  return gifs;
};

export { getTrendingGifs };

//
