import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './reducers/todos';

const store = configureStore({ reducer: todosReducer });

export default store;
