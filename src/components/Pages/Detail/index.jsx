import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import ListOfGifs from 'components/Organisms/ListOfGifs';
import { useGetGifById } from 'hooks/useGetGifById';
import { DetailTitle } from './styles';
import Button from 'components/Atoms/Button';

const Detail = () => {
  const { gifId } = useParams();
  const { gifs, loading, error } = useGetGifById({ gifId });
  const gifDetail = gifs[0];
  const history = useHistory();

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
          {gifDetail ? `${gifDetail.title} || Giffy, a Gif Searcher App ` : 'Loading Gif || Giffy, a Gif Searcher App'}
        </title>
      </Helmet>
      <ListOfGifs gifs={gifs} singleList />
      <br />
      {gifDetail && (
        <Button onClick={() => history.push(`/search/${gifDetail.title}`)}>
          View all '{gifDetail.title}' gifs
        </Button>
      )}
      <br />
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </section>
  );
};

export default Detail;
