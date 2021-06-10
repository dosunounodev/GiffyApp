import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DataContext } from 'contexts/DataContext';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import Button from 'components/Atoms/Button';

const LastSearchSection = () => {
  const { lastSearch } = useContext(DataContext);
  const { gifs: lastSearchGifs, loading } = useGetGifsByKeyword({
    keyword: lastSearch || '',
    limit: 5,
  });
  const history = useHistory();
  return (
    <>
      {loading ? (
        <p>Loading. . .</p>
      ) : (
        <>
          <ListOfGifs gifs={lastSearchGifs} />
          <br />
          <Button onClick={() => history.push(`/search/${lastSearch}`)}>
            View all '{lastSearch}' gifs
          </Button>
        </>
      )}
    </>
  );
};

export default LastSearchSection;
