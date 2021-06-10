import React, { useState } from 'react';
import { useGetGifsByKeyword } from 'hooks/useGetGifsByKeyword';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import SearchForm from 'components/Organisms/SearchForm';

const SearchGifsSection = () => {
  const [keyword, setKeyword] = useState('');
  const { gifs, loading } = useGetGifsByKeyword({ keyword, limit: 5 });
  return (
    <>
      {loading ? (
        <p>Loading. . .</p>
      ) : (
        <>
          <SearchForm keyword={keyword} setKeyword={setKeyword} />
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </>
  );
};

export default SearchGifsSection;
