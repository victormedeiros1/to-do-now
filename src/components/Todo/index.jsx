import { TodoStyles, Inputs, Checkbox, TextField, Delete, Bar } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateTodo } from '../../store/actions/todos';
import { Trash } from 'phosphor-react';

const Todo = ({ id }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.value);
    dispatch(updateTodo(id, { isChecked }));
  };
  const handleTextField = (e) => {
    setText(e.target.value);
    dispatch(updateTodo(id, { text }));
  };

  return (
    <TodoStyles>
      <Bar />
      <Delete>
        <Trash size={20} color="#ccc" />
      </Delete>
      <Inputs>
        <Checkbox onChange={(e) => handleCheckbox(e)} type="checkbox" />
        <TextField onChange={(e) => handleTextField(e)} name="text" type="text" />
      </Inputs>
    </TodoStyles>
  );
};

export default Todo;
