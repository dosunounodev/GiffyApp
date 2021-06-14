import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, useParams } from 'react-router-dom';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { useGetGifById } from 'hooks/useGetGifById';
import { DetailTitle } from './styles';

const Detail = () => {
  const { gifId } = useParams();
  const { gifs, loading, error } = useGetGifById({ gifId });
  const gifDetail = gifs[0];

  console.log(gifs);

  if (loading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <DetailTitle>Loading . . . </DetailTitle>
      </>
    );
  if (error) return <Redirect to="/NotFound" />;

  return (
    <section>
      <Helmet>
        <title>
          {gifDetail ? `${gifDetail.title} || Giffy ` : 'Loading Gif || Giffy'}
        </title>
      </Helmet>
      <ListOfGifs gifs={gifs} />
    </section>
  );
};

export default Detail;
