import { styled } from '@stitches/react';

export const TodoStyles = styled('div', {
  background: '$light',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '$todoShadow',
  transitionDuration: '0.3s',
  borderRadius: 4,
  gap: '0.5rem',
  padding: '0 $12',

  '&:has(input:focus)': {
    boxShadow: '$todoShadowFocus',
  },
});

export const Checkbox = styled('input', {
  cursor: 'pointer',
  width: '0.75rem',
  height: '0.75rem',
});

export const Field = styled('input', {
  background: 'transparent',
  color: '$lightgray',
  width: '100%',
  fontSize: '$16',
  border: 'none',
  padding: '$12 0',

  '&:focus': {
    outline: 0,
  },
});
