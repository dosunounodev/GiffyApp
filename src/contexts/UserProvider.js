import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
  const [jwt, setJwt] = useState(null);

  const data = {
    jwt,
    setJwt,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
