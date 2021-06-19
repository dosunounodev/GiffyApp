import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  height: 40px;
  padding: 10px;
  border: 2px solid #1565c0;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  color: #1565c0;
  transition-property: color, background-color;
  transition-duration: 0.3s;
  will-change: color, background-color;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: #fff;
    background-color: #1565c0;
  }

  ${({ invert }) =>
    invert &&
    css`
      border-color: #fff;
      color: #fff;
      background-color: #1565c0;
      &:hover {
        color: #1565c0;
        background-color: #fff;
      }
    `}
`;

export { StyledButton };
