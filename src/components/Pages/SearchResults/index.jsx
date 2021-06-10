import React from 'react';
import { useParams } from 'react-router';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { SearchTitle } from './styles';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import Button from 'components/Atoms/Button';

const SearchResults = () => {
  const { keyword } = useParams();
  const { gifs, loading, setPage } = useGetGifsByKeyword({
    keyword,
    limit: 10,
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section>
      {loading ? (
        <SearchTitle>Loading . . . </SearchTitle>
      ) : (
        <>
          <SearchTitle>Results of '{keyword}'</SearchTitle>
          <ListOfGifs gifs={gifs} />
          <br />
          <Button onClick={handleNextPage}> Next Page</Button>
        </>
      )}
    </section>
  );
};

export default SearchResults;
