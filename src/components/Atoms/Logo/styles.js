import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  padding: 30px 0 20px;
`;

const Title = styled.h1`
  font-size: 6.4rem;
  font-style: italic;
  margin-right: 10px;
  color: royalblue;
`;

const SubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`;

export { LogoContainer, Title, SubTitle };
