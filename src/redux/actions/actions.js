import axios from 'axios';
import {
  CHANGE_ACTIVE_BOOK_IMAGE,
  CHANGE_ACTIVE_BOOK_TITLE,
  CHANGE_ACTIVE_CATEGORY,
  CHANGE_SORT_ICON,
  FETCH_AUTH,
  FETCH_BOOK,
  FETCH_BOOKS,
  FETCH_CATEGORIES,
  FILTER_BOOKS,
  HIDE_ALERT,
  HIDE_LOADER,
  SEARCH_BOOKS,
  SHOW_ALERT,
  SHOW_LOADER,
  SORT_ASCENDING,
  SORT_DESCENDING,
} from '../types/types';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
export function changeActiveCategory(category) {
  return {
    type: CHANGE_ACTIVE_CATEGORY,
    payload: category,
  };
}
export function changeActiveBookImage(imageIndex) {
  return {
    type: CHANGE_ACTIVE_BOOK_IMAGE,
    payload: imageIndex,
  };
}
export function changeActiveBookTitle(title) {
  return {
    type: CHANGE_ACTIVE_BOOK_TITLE,
    payload: title,
  };
}
export function sortAscending(books) {
  return {
    type: SORT_ASCENDING,
    payload: books,
  };
}
export function sortDescending(books) {
  return {
    type: SORT_DESCENDING,
    payload: books,
  };
}
export function changeSortIcon() {
  return {
    type: CHANGE_SORT_ICON,
  };
}
export function searchBooks(text) {
  return {
    type: SEARCH_BOOKS,
    payload: text,
  };
}
export function filterBooks(books) {
  return {
    type: FILTER_BOOKS,
    payload: books,
  };
}
export function fetchBooks() {
  /* eslint-disable */
  return async function (dispatch) {
    try {
      dispatch(showLoader());
      return await axios('https://strapi.cleverland.by/api/books').then(function (response) {
        dispatch({ type: FETCH_BOOKS, payload: response.data });
        dispatch(hideLoader());
      });
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert('Что-то пошло не так. Обновите страницу через некоторое время.'));
    }
  };
}

export function fetchBook(id) {
  /* eslint-disable */
  return async function (dispatch) {
    try {
      dispatch(showLoader());
      return await axios(`https://strapi.cleverland.by/api/books/${id}`).then(function (response) {
        dispatch({ type: FETCH_BOOK, payload: response.data });
        dispatch(hideLoader());
      });
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert('Что-то пошло не так. Обновите страницу через некоторое время.'));
    }
  };
}

export function fetchCategories() {
  /* eslint-disable */
  return async function (dispatch) {
    try {
      dispatch(showLoader());
      return await axios('https://strapi.cleverland.by/api/categories').then(function (response) {
        dispatch({ type: FETCH_CATEGORIES, payload: response.data });
        dispatch(hideLoader());
      });
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert('Что-то пошло не так. Обновите страницу через некоторое время.'));
    }
  };
}
export function fetchAuth(data) {
  /* eslint-disable */
  return async function (dispatch) {
    try {
      dispatch(showLoader());
      return await axios.post('https://strapi.cleverland.by/api/auth/local', data).then(function (response) {
        dispatch({ type: FETCH_AUTH, payload: response.data });
        dispatch(hideLoader());
      });
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showAlert('Что-то пошло не так. Обновите страницу через некоторое время.'));
    }
  };
}
