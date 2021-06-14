import { useGetTrendingGifs } from 'hooks/useGetTrendingGifs';
import { Redirect } from 'react-router-dom';
import ListOfGifs from '../ListOfGifs';

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

  return <ListOfGifs gifs={trendingGifs} collage={collage} />;
};

export default TrendingGifWrapper;
