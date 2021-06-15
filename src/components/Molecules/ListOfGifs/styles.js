import styled, { css } from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: 200px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  min-height: ${({ minheight }) => minheight && '100vh'};

  ${({ singleList }) =>
    singleList &&
    css`
      grid-auto-rows: initial;
    `}
`;

export { List };
