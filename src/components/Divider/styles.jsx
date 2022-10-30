import { styled } from '@stitches/react';

export const DividerStyles = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 32,
  margin: '$8 0',

  '@media (max-width: 576px)': {
    gap: 16,
  },

  '.note-pencil-icon-color': {
    color: '$gray',

    '@media (max-width: 576px)': {
      width: 24,
    },
  },
});

export const Line = styled('hr', {
  width: 'calc(100% - 70%)',
  border: '1px solid $gray',
  backgroundColor: '$gray',
});
