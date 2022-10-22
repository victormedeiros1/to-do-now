import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './reducers/todos';
import { themeReducer } from './reducers/theme';

const store = configureStore({
  reducer: {
    todosReducer,
    themeReducer,
  },
});

export default store;
