import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { DataContext } from 'contexts/DataContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import Button from 'components/Atoms/Button';
import TrendingTermsSection from 'components/Organisms/TrendingTermsSection';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import notFoundLogo from 'assets/404.png';
import { HomeTitle as Title, SectionWrapper } from '../Home/styles';
import { ImgWrapper } from './style';

const NotFound = () => {
  const { loadingTrendingTerms } = useContext(DataContext);

  const { gifs, loading, error } = useGetGifsByKeyword({
    keyword: 'error 404',
    limit: 5,
  });
  return (
    <section>
      <Helmet>
        <title>Not Found ! Oopsss.. || Giffy, a Gif Searcher App</title>
      </Helmet>
      <ImgWrapper>
        <img src={notFoundLogo} alt="Not Found" />
      </ImgWrapper>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
      <br />

      <SectionWrapper>
        <Title>Some 404's Gifs</Title>
        {loading ? (
          <Title>Loading</Title>
        ) : error ? (
          <Title>Error oops</Title>
        ) : (
          <ListOfGifs gifs={gifs} />
        )}
      </SectionWrapper>

      <SectionWrapper bgcolor="white">
        <Title>Top Categories</Title>
        {loadingTrendingTerms ? (
          <Title>Loading</Title>
        ) : (
          <TrendingTermsSection />
        )}
      </SectionWrapper>
    </section>
  );
};

export default NotFound;
