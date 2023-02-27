import { FETCH_AUTH } from '../types/types';

const initialState = {
  login: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};
