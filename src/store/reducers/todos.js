const INITIAL_STATE = {
  todos: [],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};
