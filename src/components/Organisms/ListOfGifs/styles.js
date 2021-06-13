import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: masonry;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  min-height: ${({ minheight }) => minheight && '100vh'};
`;

export { List };
