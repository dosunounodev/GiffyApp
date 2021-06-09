import { API_URL, API_KEY } from 'services/settings';

const getTrendingGifs = async ({ limit = 10 } = {}) => {
  const res = await fetch(
    `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g`
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
