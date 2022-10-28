import { createTheme } from '/stitches.config';

export const lightTheme = createTheme('light-theme', {
  colors: {
    light: '#fff',
    dark: '#222',
    lightgray: '#999',
    gray: '#494949',
  },
  shadows: {
    todoShadow: '0 0 6px rgba(0,0,0,0.3)',
  },
});
