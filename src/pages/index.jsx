import Container from '../components/Container';
import Divider from '../components/Divider';
import Todos from '../components/Todos';
import H1 from '../components/H1';

const Home = () => {
  return (
    <Container>
      <H1>TO-DO NOW</H1>
      <Divider />
      <Todos />
    </Container>
  );
};

export default Home;
