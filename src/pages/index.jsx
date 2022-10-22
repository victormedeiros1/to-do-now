import Container from '../components/Container';
import Divider from '../components/Divider';
import Todos from '../components/Todos';
import H1 from '../components/H1';
import BackgroundBars from '../components/BackgroundBars';

const Home = () => {
  return (
    <Container>
      <H1>TO-DO NOW</H1>
      <Divider />
      <Todos />
      <BackgroundBars />
    </Container>
  );
};

export default Home;
