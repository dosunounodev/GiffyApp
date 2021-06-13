import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
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

  const { gifs, loading, setPage } = useGetGifsByKeyword({
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

  return (
    <section>
      {loading ? (
        <SearchTitle>Loading . . . </SearchTitle>
      ) : (
        <SectionWrapper>
          <SearchForm initialKeyword={keywordsParams} />
          <SearchTitle>{keywordsParams}</SearchTitle>
          <ListOfGifs minheight gifs={gifs} />
          <div ref={externalRef}></div>
        </SectionWrapper>
      )}
    </section>
  );
};

export default SearchResults;
