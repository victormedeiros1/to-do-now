import { TodoStyles, Inputs, TextField, Delete, Bar } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import _ from 'lodash';
import { deleteTodo, updateTodo } from '../../store/actions/todos';
import { CheckSquare, Square, Trash } from 'phosphor-react';

const Todo = ({ id, text, isChecked }) => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState(text);
  const [todoIsChecked, setTodoIsChecked] = useState(isChecked);

  const handleCheckbox = () => {
    setTodoIsChecked(!todoIsChecked);
    console.log(todoIsChecked);
    dispatch(updateTodo(id, { isChecked: todoIsChecked }));
  };

  const handleTextField = _.debounce((e) => {
    setTodoText(e.target.value);
    dispatch(updateTodo(id, { text: todoText }));
  }, 500);

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
          onChange={handleTextField}
          name="text"
          type="text"
          value={todoText}
          textDecoration={todoIsChecked && 'lineThrough'}
          placeholder="Type something..."
          disabled={todoIsChecked}
          autoFocus
        />
      </Inputs>
    </TodoStyles>
  );
};

export default Todo;
