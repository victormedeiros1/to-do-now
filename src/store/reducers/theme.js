const INITIAL_STATE = {
  theme: 'light-theme',
};

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};
