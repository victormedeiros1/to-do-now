import { styled } from '@stitches/react';

export const FooterStyles = styled('footer', {
  display: 'flex',
  gap: '1.5rem',
});

export const FooterLink = styled('a', {
  color: '$dark',
  textDecoration: 'none',

  '&:hover': {
    color: 'tomato',
  },
});
