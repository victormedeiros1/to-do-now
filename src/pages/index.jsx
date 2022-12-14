import Container from '../components/Container';
import Divider from '../components/Divider';
import Todos from '../components/Todos';
import H1 from '../components/H1';
import Background from '../components/Background';
import ToggleTheme from '../components/ToggleTheme';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { lightTheme } from '../theme/light';
import { darkTheme } from '../theme/dark';

const Home = () => {
  const { theme } = useSelector((state) => state.themeReducer.theme);

  return (
    <Container className={theme === 'light-theme' ? darkTheme : lightTheme}>
      <ToggleTheme />
      <H1>TO-DO NOW</H1>
      <Divider />
      <Todos />
      <Footer />
      <Background />
    </Container>
  );
};

export default Home;
