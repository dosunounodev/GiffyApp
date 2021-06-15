import { ACTION_TYPES } from './types';

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_KEYWORD:
      return { ...state, keyword: action.payload };

    case ACTION_TYPES.UPDATE_RATING:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
};
