import React from 'react';
import Logo from 'components/Atoms/Logo';
import Footer from 'components/Organisms/Footer';
import Header from 'components/Organisms/Header';
import { Main } from './styles';

const MainLayout = ({ children }) => {
  return (
    <Main>
      <Header />
      <Logo />
      {children}
      <Footer />
    </Main>
  );
};

export default MainLayout;
