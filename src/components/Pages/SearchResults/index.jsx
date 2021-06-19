import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useParams, Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
import debounce from 'just-debounce-it';
import { DataContext } from 'contexts/DataContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import useNearScreen from 'hooks/useNearScreen';
import Title from 'components/Atoms/Title';
import SectionWrapper from 'components/Atoms/SectionWrapper';
import ListOfGifs from 'components/Molecules/ListOfGifs';
import SearchForm from 'components/Molecules/SearchForm';

const SearchResults = () => {
  const { setLastSearch } = useContext(DataContext);
  const { keyword: keywordsParams, rating: ratingParams = 'g' } = useParams();

  const { gifs, loading, loadingMore, error, setPage } = useGetGifsByKeyword({
    keyword: keywordsParams,
    limit: 10,
    rating: ratingParams,
  });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  useEffect(() => {
    setLastSearch(keywordsParams);
    localStorage.setItem('lastSearch', keywordsParams);
    return () => {};
  }, [keywordsParams, setLastSearch]);

  // eslint-disable-next-line
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  if (error) return <Redirect to="/NotFound" />;

  return (
    <section>
      <Helmet>
        <title>{`${gifs.length} Results of: '${keywordsParams}' || Giffy, a Gif Searcher App`}</title>
      </Helmet>
      <SearchForm
        initialKeyword={keywordsParams}
        initialRating={ratingParams}
      />
      <SectionWrapper>
        <Title>{keywordsParams}</Title>
        {loading ? (
          <Title>Cargando . . . </Title>
        ) : (
          <>
            <ListOfGifs
              loadingMore={loadingMore}
              minheight
              gifs={gifs}
              collage
            />
            <div ref={externalRef}></div>
          </>
        )}
      </SectionWrapper>
    </section>
  );
};

export default SearchResults;
