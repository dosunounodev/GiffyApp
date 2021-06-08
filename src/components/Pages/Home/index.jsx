import React, { useState } from 'react';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import { useGetTrendingGifs } from 'hooks/useGetTrendingGifs';
import { useGetTrendingSearchTerms } from 'hooks/useGetTrendingSearchTerms';
import { HomeTitle, PopularGifsWrapper, PopularGifLink } from './styles';
import SearchForm from 'components/Organisms/SearchForm';

const Home = () => {
  const [keyword, setKeyword] = useState('');

  const { gifs, loading } = useGetGifsByKeyword({ keyword, limit: 5 });

  const { gifs: trendingGifs } = useGetTrendingGifs({
    limit: 10,
  });

  const { gifs: trendingTerms } = useGetTrendingSearchTerms();

  return (
    <section>
      {loading ? (
        <HomeTitle>Cargando . . . </HomeTitle>
      ) : (
        <>
          <HomeTitle>Search a Gif</HomeTitle>
          <SearchForm keyword={keyword} setKeyword={setKeyword} />
          <ListOfGifs gifs={gifs} />
          <PopularGifsWrapper>
            <HomeTitle>Top Categories</HomeTitle>
            {trendingTerms.map((topic) => (
              <PopularGifLink key={topic} to={`/search/${topic}`}>
                {topic}
              </PopularGifLink>
            ))}
          </PopularGifsWrapper>
          <PopularGifsWrapper>
            <HomeTitle>The Top 10 Gifs Trending</HomeTitle>
            <ListOfGifs gifs={trendingGifs} />
          </PopularGifsWrapper>
        </>
      )}
    </section>
  );
};

export default Home;
