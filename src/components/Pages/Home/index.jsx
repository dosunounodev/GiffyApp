import React, { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';
import { useHistory } from 'react-router';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import SearchForm from 'components/Organisms/SearchForm';
import {
  HomeTitle,
  SectionWrapper,
  TrendingsWrapper,
  TrendingGifLink,
  ViewAllButton,
} from './styles';

const Home = () => {
  const {
    keyword,
    setKeyword,
    gifs,
    loading,
    lastSearch,
    lastSearchGifs,
    trendingGifs,
    trendingTerms,
  } = useContext(DataContext);

  const history = useHistory();

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
              <ViewAllButton
                onClick={() => history.push(`/search/${lastSearch}`)}
              >
                View all '{lastSearch}' gifs
              </ViewAllButton>
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
