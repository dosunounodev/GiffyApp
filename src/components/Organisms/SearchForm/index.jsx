import { LastSearchContext } from 'contexts/LastSearchContext';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { SearchFormWrapper } from './styles';

const SearchForm = ({ keyword, setKeyword }) => {
  const history = useHistory();
  const { setLastSearch } = useContext(LastSearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
    setLastSearch(keyword);
    localStorage.setItem('lastSearch', keyword);
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        placeholder="Search a gif here"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>View All Results</button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
