import { styled } from '@stitches/react';

export const Main = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '$24',
  gap: '1.5rem',
});

export const H1Styles = styled('h1', {
  color: '$gray',
  fontSize: '$64',
});

export const Line = styled('hr', {
  border: '1px solid $gray',
  width: 50,
  height: 2,
});
