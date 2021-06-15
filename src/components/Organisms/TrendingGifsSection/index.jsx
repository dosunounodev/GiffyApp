import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';

const TrendingGifWrapper = React.lazy(() => import('./TrendingGifWrapper'));

const TrendingGifsSection = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <section ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? <TrendingGifWrapper /> : null}
      </Suspense>
    </section>
  );
};

export default TrendingGifsSection;
