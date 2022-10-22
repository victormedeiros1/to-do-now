import { styled } from '@stitches/react';

export const TodoStyles = styled('div', {
  background: '$light',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
  transitionDuration: '0.3s',
  borderRadius: 4,
  gap: '0.5rem',
  padding: '0 $12',

  '&:has(input:focus)': {
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.3)',
  },
});

export const Checkbox = styled('input', {
  cursor: 'pointer',
  width: '0.75rem',
  height: '0.75rem',
});

export const Field = styled('input', {
  color: '$lightgray',
  width: '100%',
  fontSize: '$16',
  border: 'none',
  padding: '$12 0',

  '&:focus': {
    outline: 0,
  },
});
