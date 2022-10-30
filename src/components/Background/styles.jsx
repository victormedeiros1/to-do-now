import { styled } from '@stitches/react';

export const BackgroundStyles = styled('div', {
  backgroundColor: '$light',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '$-1',
});

export const Bar = styled('div', {
  background: '$lightgray',
  position: 'fixed',
  width: 100,
  height: 500,
  transform: 'rotate(-45deg)',

  variants: {
    position: {
      top: {
        top: -120,
        right: 0,

        '@media(max-width: 576px)': {
          top: -60,
          width: 50,
          height: 250,
        },
      },
      bottom: {
        bottom: -120,
        left: 0,

        '@media(max-width: 576px)': {
          bottom: -60,
          width: 50,
          height: 250,
        },
      },
    },
  },
});
