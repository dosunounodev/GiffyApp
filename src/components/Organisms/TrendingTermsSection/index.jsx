import React from 'react';
import { useGetTrendingSearchTerms } from 'hooks/useGetTrendingSearchTerms';
import Title from 'components/Atoms/Title';
import { TrendingGifLink, TrendingsWrapper } from './style';

const TrendingTermsSection = () => {
  const {
    terms: trendingTerms,
    loading: loadingTrendingTerms,
    error: errorTrendingTerms,
  } = useGetTrendingSearchTerms();

  if (loadingTrendingTerms) return null;
  if (errorTrendingTerms)
    return <p>Se Produjo un error buscando trendings terms</p>;

  return (
    <>
      <Title color="royalblue">Top Categories</Title>
      <TrendingsWrapper>
        {trendingTerms.map((topic, index) => (
          <TrendingGifLink key={index} to={`/search/${topic}`}>
            {topic}
          </TrendingGifLink>
        ))}
      </TrendingsWrapper>
    </>
  );
};

export default TrendingTermsSection;
