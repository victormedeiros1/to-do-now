import { styled } from '@stitches/react';

export const DividerStyles = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,
  margin: '$8 0',

  '.note-pencil-icon-color': {
    color: '$gray',
  },
});

export const Line = styled('hr', {
  width: 'calc(100% - 70%)',
  border: '1px solid $gray',
  backgroundColor: '$gray',
});
