import Container from '../components/Container';
import Divider from '../components/Divider';
import Todos from '../components/Todos';
import H1 from '../components/H1';
import Background from '../components/Background';
import ToggleTheme from '../components/ToggleTheme';
import { useSelector } from 'react-redux';
import { lightTheme } from '../theme/light';
import { darkTheme } from '../theme/dark';

const Home = () => {
  const { theme } = useSelector((state) => state.themeReducer.theme);

  return (
    <Container className={theme === 'dark-theme' ? lightTheme : darkTheme}>
      <ToggleTheme />
      <H1>TO-DO NOW</H1>
      <Divider />
      <Todos />
      <Background />
    </Container>
  );
};

export default Home;
