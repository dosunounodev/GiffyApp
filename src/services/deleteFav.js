import { BACKEND_API_URL } from 'services/settings';

const ENDPOINT = '/favs';

const deleteFav = ({ id, jwt }) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jwt,
    }),
  };

  return fetch(`${BACKEND_API_URL}${ENDPOINT}/${id}`, options)
    .then((response) => {
      if (!response.ok) throw new Error('Error while deleting fav');
      return response.json();
    })
    .then((json) => {
      const { favs } = json;
      console.log(favs);
      return favs;
    });
};

export { deleteFav };
