import React from 'react';
import { Helmet } from 'react-helmet';
import SectionWrapper from 'components/Atoms/SectionWrapper';
import SearchForm from 'components/Molecules/SearchForm';
import LastSearchSection from 'components/Organisms/LastSearchSection';
import TrendingGifsSection from 'components/Organisms/TrendingGifsSection';
import TrendingTermsSection from 'components/Organisms/TrendingTermsSection';

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Giffy, a Gif Searcher App</title>
      </Helmet>

      <SearchForm />

      <SectionWrapper>
        <LastSearchSection />
      </SectionWrapper>

      <SectionWrapper bgcolor="white">
        <TrendingTermsSection />
      </SectionWrapper>

      <SectionWrapper>
        <TrendingGifsSection />
      </SectionWrapper>
    </section>
  );
};

export default React.memo(Home);
