import styled, { css } from 'styled-components';

const GifContainer = styled.article`
  position: relative;
  width: 100%;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  overflow: hidden;
  ${({ collage }) =>
    collage &&
    css`
      @media screen and (min-width: 410px) {
        &:nth-child(5n + 1) {
          grid-column: span 2;
        }
        &:nth-child(12n + 1) {
          grid-column: span 2;
          grid-row: span 2;
        }
      }
    `}
  max-width: 600px;
  &:hover {
    border: 5px solid royalblue;
    h3 {
      background-color: royalblue;
    }
  }
  &:hover img {
    transform: scale(1.2);
    z-index: 10;
  }
`;

const GifTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 5px 10px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  z-index: 10;
`;
const GifImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s linear;
`;

export { GifContainer, GifTitle, GifImage };
