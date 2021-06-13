import React, { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';
import LastSearchSection from 'components/Organisms/LastSearchSection';
import TrendingGifsSection from 'components/Organisms/TrendingGifsSection';
import SearchForm from 'components/Organisms/SearchForm';

import {
  HomeTitle,
  SectionWrapper,
  TrendingsWrapper,
  TrendingGifLink,
} from './styles';

const Home = () => {
  const { lastSearch, trendingTerms } = useContext(DataContext);

  return (
    <section>
      <SearchForm />

      <SectionWrapper>
        <HomeTitle>Last Search: '{lastSearch}'</HomeTitle>
        {lastSearch ? <LastSearchSection /> : <p>Do a search</p>}
      </SectionWrapper>

      <SectionWrapper bgcolor="white">
        <HomeTitle>Top Categories</HomeTitle>
        <TrendingsWrapper>
          {trendingTerms.map((topic, index) => (
            <TrendingGifLink key={index} to={`/search/${topic}`}>
              {topic}
            </TrendingGifLink>
          ))}
        </TrendingsWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <HomeTitle>The Top 10 Gifs Trending</HomeTitle>
        <TrendingGifsSection />
      </SectionWrapper>
    </section>
  );
};

export default React.memo(Home);
