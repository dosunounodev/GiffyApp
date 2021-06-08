import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeTitle = styled.h2`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  font-size: 3.6rem;
  text-align: center;
`;

const PopularGifsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`;

const PopularGifLink = styled(Link)`
  font-size: 2rem;
  margin: 10px 20px;
  padding: 5px;
  border: 2px solid #1565c0;
`;

export { HomeTitle, PopularGifsWrapper, PopularGifLink };
