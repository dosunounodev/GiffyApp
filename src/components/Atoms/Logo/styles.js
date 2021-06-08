import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  font-style: italic;
  margin-right: 10px;
`;

const SubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`;

export { LogoContainer, Title, SubTitle };
