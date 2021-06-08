import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: #fafafa;
  background: #b92b27; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #1565c0,
    #111
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1565c0,
    #111
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export { HeaderWrapper };
