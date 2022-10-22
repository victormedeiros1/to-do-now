import Todo from '../Todo';
import CreateTodo from '../CreateTodo';
import { TodosStyles } from './styles';

const Todos = () => {
  return (
    <TodosStyles>
      <Todo />
      <CreateTodo />
    </TodosStyles>
  );
};

export default Todos;
