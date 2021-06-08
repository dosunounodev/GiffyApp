const API_KEY = 'MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM';

const getGifs = async ({ keyword = 'panda', limit = 10 } = {}) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
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
