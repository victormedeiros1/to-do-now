import { theme } from '/stitches.config.js';
import { styled } from '@stitches/react';
import { useSelector } from 'react-redux';
import { darkTheme } from './theme/dark';
import { lightTheme } from './theme/light';
import Home from './pages';

const App = () => {
  return <Home />;
};

export default App;
