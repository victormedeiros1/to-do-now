import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './reducers/todos';
import { themeReducer } from './reducers/theme';

const store = configureStore({
  reducer: {
    todosReducer,
    themeReducer,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
