import { API_URL, API_KEY } from 'services/settings';

const getGifs = async ({ keyword = 'gif', limit = 10, page = 0 } = {}) => {
  const res = await fetch(
    `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
      page * limit
    }&rating=g&lang=en`
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

export { getGifs };
