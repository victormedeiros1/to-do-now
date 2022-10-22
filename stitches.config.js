import { createStitches, globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap')",
  ],
  '*': {
    fontFamily: 'Quicksand, sans-serif',
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    ouline: 0,
  },

  html: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    scrollBehavior: 'smooth',
  },
  // '::-webkit-scrollbar': {
  //   width: 6,
  // },

  // '::-webkit-scrollbar-track': {
  //   boxShadow: 'inset 0 0 5px gray',
  // },

  // '::-webkit-scrollbar-thumb': {
  //   background: '$green',
  //   borderRadius: 10,

  //   '&:hover': {
  //     background: '#20aa47',
  //   },
  // },
  body: {
    background: '$light',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundAttachment: 'fixed',
  },
  'h1, h2': {
    fontFamily: 'Racing Sans One, sans-serif',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  button: {
    cursor: 'pointer',
  },
});

globalStyles();

export const { theme, createTheme } = createStitches({
  theme: {
    space: {
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      48: '3rem',
      64: '4rem',
      80: '5rem',
      100: '6.25rem',
      128: '8rem',
    },
    fontSizes: {
      10: '.625rem',
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      80: '5rem',
      100: '6.25rem',
    },
    lineHeights: {
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      80: '5rem',
      100: '6.25rem',
    },
    zIndices: {
      '-1': -1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    },
  },
  media: {
    xs: '(max-width: 576px)',
    sm: '(max-width: 768px)',
    md: '(max-width: 992px)',
  },
  utils: {
    m: (value) => ({
      margin: value,
    }),
    mx: (value) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),

    p: (value) => ({
      padding: value,
    }),
    px: (value) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
  },
});
