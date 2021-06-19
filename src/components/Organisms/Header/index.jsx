import React from 'react';
import { Link } from 'react-router-dom';
import useUser from 'hooks/useUser';
import { HeaderWrapper, LogoutButton } from './styles';

const Header = () => {
  const { isLogged, logout } = useUser();
  return (
    <HeaderWrapper>
      {isLogged ? (
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </HeaderWrapper>
  );
};

export default Header;
