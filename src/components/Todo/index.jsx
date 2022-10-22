import { TodoStyles, Checkbox, Field } from './styles';

const Todo = () => {
  return (
    <TodoStyles>
      <Checkbox type="checkbox" />
      <Field type="text" />
    </TodoStyles>
  );
};

export default Todo;
