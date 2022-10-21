import { styled } from '@stitches/react';

export const DividerStyles = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,
  margin: '$8 0',
});

export const Line = styled('hr', {
  width: 'calc(100% - 70%)',
});
