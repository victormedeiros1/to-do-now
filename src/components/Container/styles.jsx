import { styled } from '@stitches/react';

export const ContainerStyles = styled('div', {
  width: '100%',
  minHeight: 'calc(100vh - $48)',
  maxWidth: 840,
  textAlign: 'center',
  padding: '$48 $20',
  margin: '0 auto',

  '@media (max-width: 576px)': {
    padding: '$48 $8',
  },
});
