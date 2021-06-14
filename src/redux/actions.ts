import { Dispatch } from 'redux';
import api from './api';
import {
  GET_BOOK_PENDING,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
  GET_BOOK_FULFILL,
  ADD_BOOK_PENDING,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_FULFILL,
  DELETE_BOOK_PENDING,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
  DELETE_BOOK_FULFILL,
  UPDATE_BOOK_PENDING,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  UPDATE_BOOK_FULFILL,
} from './actionTypes';

export const getBook = () => (dispatch: Dispatch) => {
  dispatch({
    type: GET_BOOK_PENDING,
  });
  return api.get('/').then((response) => {
    dispatch({
      type: GET_BOOK_SUCCESS,
      payload: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: GET_BOOK_FAILURE,
      error,
    });
  }).finally(() => {
    dispatch({
      type: GET_BOOK_FULFILL,
    });
  });
};

export const addBook = (bookName: string, author: string, price: any) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_BOOK_PENDING,
  });
  return api.post('/create', { bookName, author, price }).then((response) => {
    dispatch({
      type: ADD_BOOK_SUCCESS,
      payload: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: ADD_BOOK_FAILURE,
      error,
    });
  }).finally(() => {
    dispatch({
      type: ADD_BOOK_FULFILL,
    });
  });
};

export const updateBook = (id: number, bookName: string, author: string, price: string) => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_BOOK_PENDING,
  });
  return api.post('/update', { id, bookName, author, price }).then((response) => {
    dispatch({
      type: UPDATE_BOOK_SUCCESS,
      payload: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: UPDATE_BOOK_FAILURE,
      error,
    });
  }).finally(() => {
    dispatch({
      type: UPDATE_BOOK_FULFILL,
    });
  });
};

export const deleteBook = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_BOOK_PENDING,
  });
  return api.post('/delete', { id }).then((response) => {
    dispatch({
      type: DELETE_BOOK_SUCCESS,
      payload: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: DELETE_BOOK_FAILURE,
      error,
    });
  }).finally(() => {
    dispatch({
      type: DELETE_BOOK_FULFILL,
    });
  });
};
