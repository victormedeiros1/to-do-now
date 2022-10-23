import { toggleTheme } from '../../store/actions/theme';
import { ButtonToggle, DarkSide, LightSide, ToggleThemeStyles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light-theme');
  const dispatch = useDispatch();

  const handleTheme = () => {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    dispatch(toggleTheme({ theme }));
  };

  return (
    <ToggleThemeStyles>
      <ButtonToggle
        style={{
          transform: theme === 'light-theme' ? 'rotate(0deg)' : 'rotate(180deg)',
        }}
        onClick={handleTheme}
      >
        <DarkSide />
        <LightSide />
      </ButtonToggle>
    </ToggleThemeStyles>
  );
};

export default ToggleTheme;
