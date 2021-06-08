import React from 'react';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { useParams } from 'react-router';
import { DetailTitle } from './styles';
import { useGetGifById } from 'hooks/useGetGifById';

const Detail = () => {
  const { gifId } = useParams();
  const { gifs, loading } = useGetGifById({ gifId });

  return (
    <section>
      {loading ? (
        <DetailTitle>Cargando . . . </DetailTitle>
      ) : (
        <>
          <DetailTitle>Gif Detail</DetailTitle>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </section>
  );
};

export default Detail;
