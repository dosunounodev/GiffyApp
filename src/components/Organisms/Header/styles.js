import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  color: #fafafa;
  background-color: royalblue;
  a {
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export { HeaderWrapper };
