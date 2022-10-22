import { Line, H1Styles, Main } from './styles';

const H1 = ({ children }) => (
  <Main>
    <Line />
    <H1Styles>{children}</H1Styles>
    <Line />
  </Main>
);

export default H1;
