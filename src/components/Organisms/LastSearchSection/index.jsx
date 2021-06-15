import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { DataContext } from 'contexts/DataContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import Button from 'components/Atoms/Button';
import Title from 'components/Atoms/Title';
import ListOfGifs from 'components/Molecules/ListOfGifs';

const LastSearchSection = () => {
  const { lastSearch } = useContext(DataContext);
  const {
    gifs: lastSearchGifs,
    loading,
    error,
  } = useGetGifsByKeyword({
    keyword: lastSearch || '',
    limit: 5,
  });
  const history = useHistory();

  if (loading) return <p>Loading . . . </p>;
  if (error) return <Redirect to="/NotFound" />;
  return (
    <>
      <Title>Last Search: '{lastSearch}'</Title>
      <ListOfGifs gifs={lastSearchGifs} />
      <br />
      <Button onClick={() => history.push(`/search/${lastSearch}`)}>
        View all '{lastSearch}' gifs
      </Button>
    </>
  );
};

export default LastSearchSection;
