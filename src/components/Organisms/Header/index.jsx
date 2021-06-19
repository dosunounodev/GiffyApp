import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './styles';

const Header = () => {
  const isLoged = true;
  return (
    <HeaderWrapper>
      {isLoged ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </HeaderWrapper>
  );
};

export default Header;
