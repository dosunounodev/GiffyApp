import styled from 'styled-components';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 20px 0;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'inherit')};
  color: ${({ bgcolor }) => (bgcolor === 'white' ? 'black' : 'inherit')};
`;

const SearchTitle = styled.h2`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 3.6rem;
  text-align: start;
  text-transform: capitalize;
`;

export { SectionWrapper, SearchTitle };
