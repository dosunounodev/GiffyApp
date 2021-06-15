import React from 'react';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useGetGifById } from 'hooks/useGetGifById';
import Button from 'components/Atoms/Button';
import Title from 'components/Atoms/Title';
import ListOfGifs from 'components/Molecules/ListOfGifs';

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
        <Title>Loading . . . </Title>
      </>
    );
  if (error) return <Redirect to="/NotFound" />;

  return (
    <section>
      <Helmet>
        <title>
          {gifDetail
            ? `${gifDetail.title} || Giffy, a Gif Searcher App `
            : 'Loading Gif || Giffy, a Gif Searcher App'}
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
