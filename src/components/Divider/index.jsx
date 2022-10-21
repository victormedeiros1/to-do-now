import { DividerStyles, Line } from './styles';
import { NotePencil } from 'phosphor-react';

const Divider = () => {
  return (
    <DividerStyles>
      <Line />
      <NotePencil size={32} color="#999999" />
      <Line />
    </DividerStyles>
  );
};

export default Divider;
