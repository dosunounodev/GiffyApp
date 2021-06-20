import React, { useState } from 'react';
import { LoginModalContext } from './LoginModalContext';

const LoginModalProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const data = { showLoginModal, setShowLoginModal };

  return (
    <LoginModalContext.Provider value={data}>
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
