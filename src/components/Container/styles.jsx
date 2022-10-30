import { styled } from '@stitches/react';

export const ContainerStyles = styled('div', {
  width: '100%',
  minHeight: '100vh',
  maxWidth: 840,
  textAlign: 'center',
  padding: '$48 $20',
  margin: '0 auto',

  '@media (max-width: 576px)': {
    padding: '$48 $8',
  },
});
