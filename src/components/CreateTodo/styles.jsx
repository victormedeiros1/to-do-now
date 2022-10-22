import { styled } from '@stitches/react';

export const ButtonCreateTodo = styled('button', {
  border: '1px dashed $gray',
  background: 'none',
  transition: '0.1s',
  borderRadius: 4,
  padding: '$12',

  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
});
