import React, { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';
import SearchGifsSection from 'components/Organisms/SearchGifsSection';
import LastSearchSection from 'components/Organisms/LastSearchSection';
import TrendingGifsSection from 'components/Organisms/TrendingGifsSection';

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
      <SectionWrapper>
        <SearchGifsSection />
      </SectionWrapper>

      {lastSearch ? (
        <SectionWrapper>
          <HomeTitle>Last Search: '{lastSearch}'</HomeTitle>
          <LastSearchSection />
        </SectionWrapper>
      ) : null}

      <SectionWrapper bgcolor="white">
        <HomeTitle>Top Categories</HomeTitle>
        <TrendingsWrapper>
          {trendingTerms.map((topic) => (
            <TrendingGifLink key={topic} to={`/search/${topic}`}>
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

export default Home;
