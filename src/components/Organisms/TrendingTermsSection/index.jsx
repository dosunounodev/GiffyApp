import { DataContext } from 'contexts/DataContext';
import React, { useContext } from 'react';
import { TrendingGifLink, TrendingsWrapper } from './style';

const TrendingTermsSection = () => {
  const { trendingTerms, loadingTrendingTerms, errorTrendingTerms } =
    useContext(DataContext);

  if (loadingTrendingTerms) return null;
  if (errorTrendingTerms)
    return <p>Se Produjo un error buscando trendings terms</p>;

  return (
    <TrendingsWrapper>
      {trendingTerms.map((topic, index) => (
        <TrendingGifLink key={index} to={`/search/${topic}`}>
          {topic}
        </TrendingGifLink>
      ))}
    </TrendingsWrapper>
  );
};

export default TrendingTermsSection;
