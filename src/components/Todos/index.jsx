import Todo from '../Todo';
import CreateTodo from '../CreateTodo';
import { TodosStyles } from './styles';
import { useSelector } from 'react-redux';

const Todos = () => {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <TodosStyles>
      {todos.map(({ id, text, isChecked }) => (
        <Todo key={id} id={id} text={text} isChecked={isChecked} />
      ))}
      <CreateTodo />
    </TodosStyles>
  );
};

export default Todos;
