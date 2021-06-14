import styled, { css } from 'styled-components';

const GifContainer = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  ${({ collage }) =>
    collage &&
    css`
      @media screen and (min-width: 410px) {
        &:nth-child(5n + 1) {
          grid-column: 1 / span 2;
        }
        &:nth-child(6n + 1) {
          grid-column: span 2;
          grid-row: span 1;
        }
        &:nth-child(8n + 1) {
          grid-row: span 2;
        }
      }
    `}
  max-width: 600px;
`;

const GifTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  font-size: 1.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;
const GifImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { GifContainer, GifTitle, GifImage };
