import React from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer, Title } from './styles';

const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        <Title>Giffy</Title>
        {/* <SubTitle>The Gif Searcher</SubTitle> */}
      </LogoContainer>
    </Link>
  );
};

export default Logo;
