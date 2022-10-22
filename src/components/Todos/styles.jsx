import { styled } from '@stitches/react';

export const TodosStyles = styled('div', {
  maxHeight: 640,
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  margin: '$24 0',
  padding: '$24',
});
