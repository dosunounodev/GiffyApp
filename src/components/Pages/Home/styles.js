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

const ViewAllButton = styled.button`
  display: block;
  width: 100%;
  max-width: 280px;
  height: 40px;
  padding: 10px;
  margin-top: 20px;
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
`;

export {
  HomeTitle,
  SectionWrapper,
  TrendingsWrapper,
  TrendingGifLink,
  ViewAllButton,
};
