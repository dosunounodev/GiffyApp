import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TrendingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
`;

const TrendingGifLink = styled(Link)`
  font-size: 2rem;
  margin: 10px;
  padding: 5px;
  border: 2px solid #1565c0;
  &:hover {
    background-color: #000;
    color: #1565c0;
  }
`;

export { TrendingsWrapper, TrendingGifLink };
