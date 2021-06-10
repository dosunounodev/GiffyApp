import React from 'react';
import { useParams } from 'react-router';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { useGetGifById } from 'hooks/useGetGifById';
import { DetailTitle } from './styles';

const Detail = () => {
  const { gifId } = useParams();
  const { gifs, loading } = useGetGifById({ gifId });

  return (
    <section>
      {loading ? (
        <DetailTitle>Cargando . . . </DetailTitle>
      ) : (
        <>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </section>
  );
};

export default Detail;
