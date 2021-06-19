import { useState, useContext, useCallback } from 'react';
import { UserContext } from 'contexts/UserContext';
import { login as loginService } from 'services/login';

const useUser = () => {
  const { jwt, setJwt } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = useCallback(
    ({ username, password }) => {
      setLoading(true);
      setError(false);
      loginService({ username, password })
        .then((token) => {
          setJwt(token);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setError(true);
        });
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    setJwt(null);
  }, [setJwt]);

  return { login, logout, isLogged: Boolean(jwt), loading, error };
};

export default useUser;
