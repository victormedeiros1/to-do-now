import { createTheme } from '/stitches.config';

export const darkTheme = createTheme('dark-theme', {
  colors: {
    light: '#222',
    dark: '#fff',
    lightgray: '#999',
    gray: '#fff',
  },
  shadows: {
    todoShadow: '0 0 6px rgba(255,255,255,0.3)',
  },
});
