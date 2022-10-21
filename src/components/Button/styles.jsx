import { styled } from '@stitches/react';

export const ButtonStyles = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: '$light',
  fontSize: '$24',
  border: '1px solid $green',
  borderRadius: 100,
  background: '$green',
  boxShadow: '0 0 0 $dark',
  transitionDuration: '0.3s',
  padding: '$24 $64',
  boxShadow: 'inset 0 0 0 rgba(0,0,0,0.25)',

  '&:hover': {
    boxShadow: 'inset 300px 0 0 rgba(0,0,0,0.25)',
  },
});
