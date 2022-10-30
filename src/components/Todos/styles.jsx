import { styled } from '@stitches/react';

export const TodosStyles = styled('div', {
  maxHeight: '50vh',
  overflowX: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  margin: '$24 0',
  padding: '$24 $32',

  '@media(max-width: 576px)': {
    margin: 0,
  },
});
