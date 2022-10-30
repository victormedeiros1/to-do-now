import { TodoStyles, Inputs, Checkbox, TextField, Delete, Bar, Label } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../../store/actions/todos';
import { CheckSquare, Square, Trash } from 'phosphor-react';

const Todo = ({ id }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
    dispatch(updateTodo(id, { isChecked }));
  };
  const handleTextField = (e) => {
    setText(e.target.value);
    dispatch(updateTodo(id, { text }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoStyles>
      <Bar />
      <Delete onClick={handleDelete}>
        <Trash size={20} color="#222" />
      </Delete>
      <Inputs>
        {isChecked ? (
          <CheckSquare onClick={(e) => handleCheckbox(e)} size={24} color="#999" />
        ) : (
          <Square onClick={(e) => handleCheckbox(e)} size={24} color="#999" />
        )}

        <TextField
          onChange={(e) => handleTextField(e)}
          name="text"
          type="text"
          textDecoration={isChecked && 'lineThrough'}
          disabled={isChecked}
          placeholder="Type something..."
        />
      </Inputs>
    </TodoStyles>
  );
};

export default Todo;
