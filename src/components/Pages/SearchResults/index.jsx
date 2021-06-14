import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useParams, Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
import debounce from 'just-debounce-it';
import { DataContext } from 'contexts/DataContext';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import SearchForm from 'components/Organisms/SearchForm';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import useNearScreen from 'hooks/useNearScreen';
import { SectionWrapper, SearchTitle } from './styles';

const SearchResults = () => {
  const { setLastSearch } = useContext(DataContext);
  const { keyword: keywordsParams } = useParams();

  const { gifs, loading, error, setPage } = useGetGifsByKeyword({
    keyword: keywordsParams,
    limit: 10,
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

  if (loading) return <SearchTitle>Cargando . . . </SearchTitle>;
  if (error) return <Redirect to="/NotFound" />;

  return (
    <>
      <Helmet>
        <title>{`Gifs Results of: '${keywordsParams}' || Giffy, a Gif Searcher App`}</title>
      </Helmet>
      <SectionWrapper>
        <SearchForm initialKeyword={keywordsParams} />
        <SearchTitle>{keywordsParams}</SearchTitle>
        <ListOfGifs minheight gifs={gifs} collage />
        <div ref={externalRef}></div>
      </SectionWrapper>
    </>
  );
};

export default SearchResults;
