import styled, { css } from 'styled-components';

export const StyledFav = styled.button`
  display: none;
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  padding: 4px;
  border-radius: 5px;
  border: 2px solid royalblue;
  background-color: rgba(65, 105, 225, 0.3);
  cursor: pointer;
  transition-property: background-color, transform;
  transition-duration: 0.6s, 0.3s;
  will-change: transform, background-color;

  :hover {
    transform: scale(1.2);
    background-color: #fff;
  }

  ${({ isFav }) =>
    isFav &&
    css`
      background-color: white;

      :hover {
        background-color: rgba(65, 105, 225, 0.8);
      }
    `}

  ${({ show }) =>
    show &&
    css`
      display: initial;
    `}
`;
