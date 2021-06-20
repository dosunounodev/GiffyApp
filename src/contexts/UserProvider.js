import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import { getFavs } from 'services/getFavs';
import { useMemo } from 'react';

const UserProvider = ({ children }) => {
  const initialFavs = useMemo(() => [], []);
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));
  const [favs, setFavs] = useState(initialFavs);
  const [showFavs, setShowFavs] = useState(false);

  useEffect(() => {
    setShowFavs(false);

    if (!jwt) {
      setFavs(initialFavs);
      setShowFavs(true);
      return;
    }

    getFavs({ jwt }).then((favsResponse) => {
      setFavs(favsResponse);
      setShowFavs(true);
    });
  }, [jwt, initialFavs]);

  const data = {
    jwt,
    setJwt,
    favs,
    setFavs,
    showFavs,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
