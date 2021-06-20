import { BACKEND_API_URL } from 'services/settings';

const ENDPOINT = '/favs';

const getFavs = ({ jwt }) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: jwt,
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BACKEND_API_URL}${ENDPOINT}`, options)
    .then((response) => {
      if (!response.ok) throw new Error('Error while adding fav');
      return response.json();
    })
    .then((json) => {
      const { favs } = json;
      console.log(favs);
      return favs;
    });
};

export { getFavs };
