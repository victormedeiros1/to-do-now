import { styled } from '@stitches/react';

export const TodoStyles = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  '&:hover > button': {
    right: -18,
  },
  '&:hover > span': {
    right: -24,
    boxShadow: '$todoShadowFocus',
  },
});

export const Inputs = styled('div', {
  position: 'relative',
  background: '$light',
  width: 'calc(100% - 8px)',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '$todoShadow',
  transitionDuration: '0.3s',
  borderRadius: '4px 0 0 4px',
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

export const TextField = styled('input', {
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

export const Delete = styled('button', {
  backgroundColor: '$lightgray',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',

  position: 'absolute',
  right: 0,

  '&:hover': {
    backgroundColor: '$gray',
  },
});

export const Bar = styled('span', {
  boxShadow: '$todoShadow',
  backgroundColor: '$light',
  width: 8,
  height: 44,
  borderRadius: '0 4px 4px 0',
  zIndex: '$1',
  position: 'absolute',
  right: 0,
});
