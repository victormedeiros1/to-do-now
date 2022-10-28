import { styled } from '@stitches/react';

export const TodoStyles = styled('div', {
  position: 'relative',
  width: 'calc(100% - 9px)',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $lightgray',
  borderRadius: '4px 0 0 4px',

  '&:hover > button': {
    right: -28,
  },
  '&:hover > span': {
    boxShadow: '$todoShadow',
    right: -37,
  },
  '&:has(input:focus)': {
    outline: 0,
    boxShadow: '$todoShadow',
  },
});

export const Inputs = styled('div', {
  position: 'relative',
  background: '$light',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  transitionDuration: '0.3s',
  borderRadius: '4px 0 0 4px',
  gap: '0.5rem',
  padding: '0 $12',

  svg: {
    cursor: 'pointer',
  },
});

export const Label = styled('label', {
  border: '1px solid $gray',
  width: 12,
  height: 12,
  borderRadius: 2,
});

export const Checkbox = styled('input', {
  display: 'none',
});

export const TextField = styled('input', {
  background: 'transparent',
  color: '$lightgray',
  width: '100%',
  fontSize: '$16',
  border: 'none',
  padding: '$12 0',

  variants: {
    textDecoration: {
      lineThrough: {
        textDecoration: 'line-through',
      },
    },
  },

  '&:focus': {
    outline: 0,
  },
});

export const Delete = styled('button', {
  backgroundColor: '#999',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',

  position: 'absolute',
  right: 0,

  '&:hover': {
    filter: 'invert(100%)',
  },
});

export const Bar = styled('span', {
  boxSizing: 'initial',
  border: '1px solid $lightgray',
  backgroundColor: '$light',
  width: 8,
  height: 44,
  borderRadius: '0 4px 4px 0',
  zIndex: '$1',
  position: 'absolute',
  right: -10,
});
