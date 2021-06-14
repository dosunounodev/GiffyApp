import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DataContext } from 'contexts/DataContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import Button from 'components/Atoms/Button';
import { Redirect } from 'react-router-dom';

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
      <ListOfGifs gifs={lastSearchGifs} />
      <br />
      <Button onClick={() => history.push(`/search/${lastSearch}`)}>
        View all '{lastSearch}' gifs
      </Button>
    </>
  );
};

export default LastSearchSection;
