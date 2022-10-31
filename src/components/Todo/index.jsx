import { TodoStyles, Inputs, TextField, Delete, Bar } from './styles';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { deleteTodo, updateTodo } from '../../store/actions/todos';
import { CheckSquare, Square, Trash } from 'phosphor-react';

const Todo = ({ id, text, isChecked }) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState(text);
  const [todoIsChecked, setTodoIsChecked] = useState(isChecked);

  const handleCheckbox = useCallback(() => {
    setTodoIsChecked(!todoIsChecked);
    dispatch(updateTodo(id, { isChecked: !isChecked }));
  }, [todoIsChecked]);

  const handleTextField = useCallback(
    (e) => {
      setTodoText(e.target.value);
      dispatch(updateTodo(id, { text: e.target.value }));
    },
    [todoText]
  );

  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <TodoStyles>
      <Bar />
      <Delete onClick={handleDelete}>
        <Trash className="trash-icon-color" size={20} />
      </Delete>
      <Inputs>
        {todoIsChecked ? (
          <CheckSquare
            className="check-icon-color check-square"
            onClick={handleCheckbox}
            size={24}
          />
        ) : (
          <Square className="check-icon-color check" onClick={handleCheckbox} size={24} />
        )}

        <TextField
          onInput={handleTextField}
          name="text"
          type="text"
          textDecoration={todoIsChecked && 'lineThrough'}
          placeholder="Type something..."
          disabled={todoIsChecked}
          value={todoText}
          autoFocus
        />
      </Inputs>
    </TodoStyles>
  );
};

export default Todo;
