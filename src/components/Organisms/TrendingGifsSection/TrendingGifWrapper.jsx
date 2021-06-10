import { useGetTrendingGifs } from 'hooks/useGetTrendingGifs';
import ListOfGifs from '../ListOfGifs';

const TrendingGifWrapper = () => {
  const { gifs: trendingGifs } = useGetTrendingGifs({
    limit: 10,
  });

  return (
    <>
      <ListOfGifs gifs={trendingGifs} />
    </>
  );
};

export default TrendingGifWrapper;
