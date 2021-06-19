import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LastSearchContext } from 'contexts/LastSearchContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import Button from 'components/Atoms/Button';
import Title from 'components/Atoms/Title';
import ListOfGifs from 'components/Molecules/ListOfGifs';

const LastSearchSection = () => {
  const { lastSearch } = useContext(LastSearchContext);
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
  if (error) return <p>Error founding Last Search </p>;

  return lastSearch ? (
    <>
      <Title>Last Search: '{lastSearch}'</Title>
      <ListOfGifs gifs={lastSearchGifs} />
      <br />
      <Button onClick={() => history.push(`/search/${lastSearch}`)}>
        View all '{lastSearch}' gifs
      </Button>
    </>
  ) : (
    <Title>Hey! Do a Search</Title>
  );
};

export default LastSearchSection;
