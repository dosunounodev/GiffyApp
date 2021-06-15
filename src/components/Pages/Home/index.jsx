import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { DataContext } from 'contexts/DataContext';
import Title from 'components/Atoms/Title';
import SectionWrapper from 'components/Atoms/SectionWrapper';
import SearchForm from 'components/Molecules/SearchForm';
import LastSearchSection from 'components/Organisms/LastSearchSection';
import TrendingGifsSection from 'components/Organisms/TrendingGifsSection';
import TrendingTermsSection from 'components/Organisms/TrendingTermsSection';

const Home = () => {
  const { lastSearch } = useContext(DataContext);

  return (
    <section>
      <Helmet>
        <title>Giffy, a Gif Searcher App</title>
      </Helmet>

      <SearchForm />

      <SectionWrapper>
        {lastSearch ? (
          <LastSearchSection />
        ) : (
          <Title>{`Hey! Do a search :)`}</Title>
        )}
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
