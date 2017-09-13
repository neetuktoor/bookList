import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //this is the value of our state
  //this reducer is going to add a key to our global app state
  //called books, where key is books and value is whatev gets returned from array of books
  //state is = to object, w/ key of books and value of an array of books
  books: BooksReducer,
  activeBook: ActiveBook

});

export default rootReducer;
