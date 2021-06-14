import { combineReducers } from 'redux';
import {
  GET_BOOK_PENDING,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
  GET_BOOK_FULFILL,
  ADD_BOOK_PENDING,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_FULFILL,
  UPDATE_BOOK_PENDING,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  UPDATE_BOOK_FULFILL,
  DELETE_BOOK_PENDING,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
  DELETE_BOOK_FULFILL,
} from './actionTypes';
import initialState from './initialState';

type ActionTypes = {
  type: string,
  payload: any,
  error: any,
};

const bookReducer = (state = initialState.books, action: ActionTypes) => {
  switch (action.type) {
    case GET_BOOK_PENDING:
    case ADD_BOOK_PENDING:
    case UPDATE_BOOK_PENDING:
    case DELETE_BOOK_PENDING:
      return { ...state, loading: true };
    case GET_BOOK_SUCCESS:
    case ADD_BOOK_SUCCESS:
    case UPDATE_BOOK_SUCCESS:
    case DELETE_BOOK_SUCCESS:
      return { ...state, data: [...action.payload.data.books], status: 'success' };
    case GET_BOOK_FAILURE:
    case ADD_BOOK_FAILURE:
    case UPDATE_BOOK_FAILURE:
    case DELETE_BOOK_FAILURE:
      return { ...state, error: { ...action.error }, status: 'failure' };
    case GET_BOOK_FULFILL:
    case ADD_BOOK_FULFILL:
    case UPDATE_BOOK_FULFILL:
    case DELETE_BOOK_FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  books: bookReducer,
});
