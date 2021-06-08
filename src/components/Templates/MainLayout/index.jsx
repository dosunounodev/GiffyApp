import React from 'react';
import Footer from 'components/Organisms/Footer';
import Header from 'components/Organisms/Header';
import { Main } from './styles';

const MainLayout = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );
};

export default MainLayout;
