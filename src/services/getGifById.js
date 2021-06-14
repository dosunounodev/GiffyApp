import { API_URL, API_KEY } from 'services/settings';

const getGifById = async ({ gifId } = {}) => {
  const res = await fetch(`${API_URL}/gifs/${gifId}?api_key=${API_KEY}`);
  const json = await res.json();
  console.log(json);
  const { id, images, title } = json.data;
  const url = images.downsized_medium.url;
  const gif = [{ id, title, url }];
  return gif;
};

export { getGifById };
