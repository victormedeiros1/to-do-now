import { DividerStyles, Line } from './styles';
import { NotePencil } from 'phosphor-react';

const Divider = () => {
  return (
    <DividerStyles>
      <Line />
      <NotePencil className="note-pencil-icon-color" size={32} />
      <Line />
    </DividerStyles>
  );
};

export default Divider;
