const API_URL = 'https://deno-api-users-login.herokuapp.com';
const ENDPOINT = '/login';

const login = ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  };

  return fetch(`${API_URL}${ENDPOINT}`, options)
    .then((response) => {
      if (!response.ok) throw new Error('Error while login');
      return response.json();
    })
    .then((json) => {
      const { jwt } = json;
      return jwt;
    });
};

export { login };
