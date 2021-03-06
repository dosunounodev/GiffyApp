import { useState, useContext, useCallback } from 'react';
import { UserContext } from 'contexts/UserContext';
import { addFav as addFavService } from 'services/addFav';
import { deleteFav as deleteFavService } from 'services/deleteFav';
import { login as loginService } from 'services/login';

const useUser = () => {
  const { jwt, setJwt, favs, setFavs } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = useCallback(
    ({ username, password, showModalToggle }) => {
      setLoading(true);
      setError(false);
      loginService({ username, password })
        .then((token) => {
          window.sessionStorage.setItem('jwt', token);
          setJwt(token);
          setLoading(false);
          setError(false);
          showModalToggle(false);
        })
        .catch((error) => {
          window.sessionStorage.removeItem('jwt');
          setJwt(null);
          console.error(error);
          setLoading(false);
          setError(true);
        });
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJwt(null);
  }, [setJwt]);

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then((favsResponse) => setFavs(favsResponse))
        .catch((error) => console.error(error));
    },
    [jwt, setFavs]
  );

  const deleteFav = useCallback(
    ({ id }) => {
      deleteFavService({ id, jwt })
        .then((favsResponse) => setFavs(favsResponse))
        .catch((error) => console.error(error));
    },
    [jwt, setFavs]
  );

  return {
    login,
    logout,
    isLogged: Boolean(jwt),
    loading,
    error,
    addFav,
    deleteFav,
    favs,
  };
};

export default useUser;
