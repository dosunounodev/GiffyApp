import React, { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import SearchForm from 'components/Organisms/SearchForm';
import {
  HomeTitle,
  SectionWrapper,
  TrendingsWrapper,
  TrendingGifLink,
} from './styles';

const Home = () => {
  const {
    keyword,
    setKeyword,
    gifs,
    loading,
    lastSearch,
    setLastSearch,
    lastSearchGifs,
    trendingGifs,
    trendingTerms,
  } = useContext(DataContext);

  return (
    <section>
      {loading ? (
        <HomeTitle>Cargando . . . </HomeTitle>
      ) : (
        <>
          <SectionWrapper>
            <HomeTitle>Search a Gif</HomeTitle>
            <SearchForm keyword={keyword} setKeyword={setKeyword} />
            <ListOfGifs gifs={gifs} />
          </SectionWrapper>

          {lastSearch ? (
            <SectionWrapper>
              <HomeTitle>Last Search: '{lastSearch}'</HomeTitle>
              <ListOfGifs gifs={lastSearchGifs} />
            </SectionWrapper>
          ) : null}

          <SectionWrapper>
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
            <ListOfGifs gifs={trendingGifs} />
          </SectionWrapper>
        </>
      )}
    </section>
  );
};

export default Home;
