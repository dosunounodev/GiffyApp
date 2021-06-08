import React from 'react';
import { useParams } from 'react-router';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { SearchTitle } from './styles';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';

const SearchResults = () => {
  const { keyword } = useParams();
  const { gifs, loading } = useGetGifsByKeyword({ keyword, limit: 25 });

  return (
    <section>
      {loading ? (
        <SearchTitle>Cargando . . . </SearchTitle>
      ) : (
        <>
          <SearchTitle>Resultados de '{keyword}'</SearchTitle>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </section>
  );
};

export default SearchResults;
