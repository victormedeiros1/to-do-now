import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos';
import { themeReducer } from './theme';

export default combineReducers({ todosReducer, themeReducer });
