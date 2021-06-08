import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: auto;
  color: #fafafa;
  background-color: #252525;

  p {
    font-size: 1.8rem;
    font-weight: bold;
  }

  a {
    color: #1565c0;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export { FooterWrapper };
