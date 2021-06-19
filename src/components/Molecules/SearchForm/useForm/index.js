import { useReducer } from 'react';
import { formReducer } from './reducer';
import { ACTION_TYPES } from './types';

export const useForm = ({ initialKeyword = '', initialRating = 'g' } = {}) => {
  const formInitialState = {
    keyword: initialKeyword,
    rating: initialRating,
  };

  const [{ keyword, rating }, formDispatch] = useReducer(
    formReducer,
    formInitialState
  );

  const updateKeyword = (keyword) =>
    formDispatch({ type: ACTION_TYPES.UPDATE_KEYWORD, payload: keyword });

  const updateRating = (rating) =>
    formDispatch({ type: ACTION_TYPES.UPDATE_RATING, payload: rating });

  return {
    keyword,
    rating,
    updateKeyword,
    updateRating,
  };
};
