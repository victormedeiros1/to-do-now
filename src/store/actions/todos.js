import { v4 as uuid } from 'uuid';

export const addTodo = () => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    text: '',
    isChecked: false,
  },
});

export const updateTodo = (id, updates) => ({
  type: 'UPDATE_TODO',
  todo: {
    id,
    updates,
  },
});
