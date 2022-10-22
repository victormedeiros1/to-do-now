import { createTheme } from '/stitches.config';

export const darkTheme = createTheme('dark-theme', {
  colors: {
    light: '#222',
    dark: '#fff',
    lightgray: '#999',
    gray: '#fff',
  },
  shadows: {
    todoShadow: '0 0px 3px rgba(255,255,255,0.2)',
    todoShadowFocus: '0 1px 6px rgba(255,255,255,0.4)',
  },
});
