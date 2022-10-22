import { styled } from '@stitches/react';

export const BackgroundBarsStyles = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  minHeight: '100vh',
  zIndex: '$-1',
});

export const TopBar = styled('div', {
  background: '$lightgray',
  position: 'fixed',
  top: -120,
  right: 0,
  width: 100,
  height: 500,
  transform: 'rotate(-45deg)',
});

export const BottomBar = styled('div', {
  background: '$lightgray',
  position: 'fixed',
  bottom: -120,
  left: 0,
  width: 100,
  height: 500,
  transform: 'rotate(-45deg)',
});
