import { Plus } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ButtonCreateTodo } from './styles';
import { addTodo } from '/src/store/actions/todos.js';

const CreateTodo = () => {
  const dispatch = useDispatch();

  return (
    <ButtonCreateTodo onClick={() => dispatch(addTodo())}>
      <Plus size={16} color="#999" />
    </ButtonCreateTodo>
  );
};

export default CreateTodo;
