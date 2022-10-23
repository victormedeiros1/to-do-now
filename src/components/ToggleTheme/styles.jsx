import { styled } from '@stitches/react';

export const ToggleThemeStyles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  position: 'absolute',
  top: 0,
  left: 20,
  background: '$gray',
  width: 48,
  height: 80,
  paddingBottom: '$16',
  borderRadius: '0 0 100px 100px',
});

export const ButtonToggle = styled('div', {
  display: 'flex',
  background: '$light',
  width: 16,
  height: 16,
  borderRadius: '50%',
  cursor: 'pointer',
  padding: 1,
});
export const DarkSide = styled('div', {
  background: '#494949',
  width: '50%',
  height: '100%',
  borderRadius: '100px 0 0 100px',
});
export const LightSide = styled('div', {
  background: '#fff',
  width: '50%',
  height: '100%',
  borderRadius: '0 100px 100px 0',
});
