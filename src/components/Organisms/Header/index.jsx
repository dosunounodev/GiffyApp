import React from 'react';
import { Link } from 'react-router-dom';
import useUser from 'hooks/useUser';
import { HeaderLogo, HeaderWrapper, LoginButton, LogoutButton } from './styles';

const Header = () => {
  const { isLogged, logout } = useUser();
  return (
    <HeaderWrapper>
      <HeaderLogo to="/">Giffy</HeaderLogo>
      <nav>
        {isLogged ? (
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        ) : (
          <LoginButton to="/login">Login</LoginButton>
        )}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
