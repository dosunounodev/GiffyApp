import styled from 'styled-components';

const StyledSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 20px 0;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : 'inherit')};
  color: ${({ bgcolor }) => (bgcolor === 'white' ? 'black' : 'inherit')};
`;

export { StyledSectionWrapper };
