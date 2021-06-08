import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeTitle = styled.h2`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  font-size: 3.6rem;
  text-align: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

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
    background-color: #fff;
    color: #1565c0;
  }
`;

export { HomeTitle, SectionWrapper, TrendingsWrapper, TrendingGifLink };
