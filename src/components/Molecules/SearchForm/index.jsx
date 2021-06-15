import React from 'react';
import { useHistory } from 'react-router';
import { SearchFormWrapper } from './styles';
import { useForm } from './useForm';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = RATINGS[0] }) => {
  const history = useHistory();

  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword ? keyword : 'Gif'}/${rating}`);
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <button type="submit">Search</button>
      <input
        type="text"
        value={keyword}
        placeholder="Search a gif here"
        onChange={(e) => updateKeyword(e.target.value)}
      />
      <select value={rating} onChange={(e) => updateRating(e.target.value)}>
        {RATINGS.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
    </SearchFormWrapper>
  );
};

export default React.memo(SearchForm);
