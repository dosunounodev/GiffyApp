import { useGetTrendingGifs } from 'hooks/useGetTrendingGifs';
import { Redirect } from 'react-router-dom';
import Title from 'components/Atoms/Title';
import ListOfGifs from 'components/Molecules/ListOfGifs';

const TrendingGifWrapper = ({ collage }) => {
  const {
    gifs: trendingGifs,
    loading,
    error,
  } = useGetTrendingGifs({
    limit: 10,
  });

  if (loading) return <p>Loading . . . </p>;
  if (error) return <Redirect to="/NotFound" />;

  return (
    <>
      <Title>The Top 10 Gifs Trending</Title>
      <ListOfGifs gifs={trendingGifs} collage={collage} />
    </>
  );
};

export default TrendingGifWrapper;
