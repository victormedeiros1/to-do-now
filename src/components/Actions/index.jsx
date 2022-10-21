import { Plus } from 'phosphor-react';
import { ActionsStyles } from './styles';
import Button from '../Button';

const Actions = () => {
  return (
    <ActionsStyles>
      <Button>
        <Plus size={24} color="#fff" />
        ADD TODO
      </Button>
    </ActionsStyles>
  );
};

export default Actions;
