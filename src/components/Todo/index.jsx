import { TodoStyles, Checkbox, TextField } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateTodo } from '../../store/actions/todos';

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
      <Checkbox onChange={(e) => handleCheckbox(e)} type="checkbox" />
      <TextField onChange={(e) => handleTextField(e)} name="text" type="text" />
    </TodoStyles>
  );
};

export default Todo;
