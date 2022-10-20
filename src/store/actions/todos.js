import { v4 as uuid } from 'uuid';

export const addTodo = ({ text, isChecked } = {}) => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    text,
    isChecked,
  },
});
