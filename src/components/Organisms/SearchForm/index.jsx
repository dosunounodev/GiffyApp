import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { SearchFormWrapper } from './styles';
import Button from 'components/Atoms/Button';

const SearchForm = ({ initiaKeyword = '' }) => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState(initiaKeyword);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${inputValue}`);
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Search a gif here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </SearchFormWrapper>
  );
};

export default React.memo(SearchForm);
