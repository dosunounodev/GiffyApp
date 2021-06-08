const API_KEY = 'MZTqNa5Op2YRSnpg7q7qWOMNtQPDqtSM';

const getGifById = async ({ gifId } = {}) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`
  );
  const json = await res.json();
  const { id, images, title } = json.data;
  const url = images.downsized_medium.url;
  const gif = [{ id, title, url }];
  console.log(gif);
  return gif;
};

export { getGifById };
