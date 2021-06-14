import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { DataContext } from 'contexts/DataContext';
import LastSearchSection from 'components/Organisms/LastSearchSection';
import TrendingGifsSection from 'components/Organisms/TrendingGifsSection';
import SearchForm from 'components/Organisms/SearchForm';
import TrendingTermsSection from 'components/Organisms/TrendingTermsSection';
import { HomeTitle, SectionWrapper } from './styles';

const Home = () => {
  const { lastSearch, loadingTrendingTerms } = useContext(DataContext);

  return (
    <section>
      <Helmet>
        <title>Giffy, a Gif Searcher App</title>
      </Helmet>

      <SearchForm />

      <SectionWrapper>
        {lastSearch ? (
          <>
            <HomeTitle>Last Search: '{lastSearch}'</HomeTitle>
            <LastSearchSection />
          </>
        ) : (
          <p>{`Hey! Do a search :)`}</p>
        )}
      </SectionWrapper>

      <SectionWrapper bgcolor="white">
        <HomeTitle>Top Categories</HomeTitle>
        {loadingTrendingTerms ? (
          <HomeTitle>Loading</HomeTitle>
        ) : (
          <TrendingTermsSection />
        )}
      </SectionWrapper>

      <SectionWrapper>
        <HomeTitle>The Top 10 Gifs Trending</HomeTitle>
        <TrendingGifsSection />
      </SectionWrapper>
    </section>
  );
};

export default React.memo(Home);
