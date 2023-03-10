import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from '../types/types';

const initialState = {
  isLoading: true,
  alert: null,
  HOST: 'https://strapi.cleverland.by',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };

    default:
      return state;
  }
};
