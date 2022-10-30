import { TodoStyles, Inputs, TextField, Delete, Bar } from './styles';
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
        <Trash className="trash-icon-color" size={20} />
      </Delete>
      <Inputs>
        {isChecked ? (
          <CheckSquare
            className="check-icon-color"
            onClick={(e) => handleCheckbox(e)}
            size={24}
          />
        ) : (
          <Square className="check-icon-color" onClick={(e) => handleCheckbox(e)} />
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
