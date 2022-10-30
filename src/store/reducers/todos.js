const INITIAL_STATE = {
  todos: [],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.todo] };
    case 'UPDATE_TODO':
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.id) {
            return {
              ...todo,
              ...action.todo.updates,
            };
          } else {
            return todo;
          }
        }),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(({ id }) => id !== action.todo.id),
      };
    default:
      return state;
  }
};
