import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  color: #fafafa;
  background-color: royalblue;
`;

const HeaderLogo = styled(Link)`
  font-size: 3.6rem;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 0.3rem;
  transition: color 0.3s linear;
  :hover {
    color: #000;
  }
`;

const LoginButton = styled(Link)`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export { HeaderWrapper, HeaderLogo, LoginButton, LogoutButton };
