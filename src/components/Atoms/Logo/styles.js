import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0 20px;
`;

const Title = styled.h1`
  font-size: 6.4rem;
  font-style: italic;
  letter-spacing: 0.3rem;
  margin-right: 10px;
  color: royalblue;
  transition: color 0.3s linear;
  :hover {
    color: #fff;
  }
`;

export { LogoContainer, Title };
