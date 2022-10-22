import { theme } from '/stitches.config.js';
import { styled } from '@stitches/react';
import { useSelector } from 'react-redux';
import { darkTheme } from './theme/dark';
import { lightTheme } from './theme/light';
import Home from './pages';

const AppWrapper = styled('div', {
  backgroundColor: '$light',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
});

const App = () => {
  const { theme } = useSelector((state) => state.themeReducer.theme);

  return (
    <AppWrapper className={theme === 'dark-theme' ? darkTheme : lightTheme}>
      <Home />
    </AppWrapper>
  );
};

export default App;
