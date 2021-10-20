import TodoListItem from '../todo_list/TodoListItem';
import TodoForm from '../todo_list/TodoForm';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  return (
    <div>
      <ul>
        { todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} removeTodo={removeTodo} />
        ))}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  )
}

export default TodoList
