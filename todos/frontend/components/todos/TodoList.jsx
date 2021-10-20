import TodoListItem from '../todo_list/TodoListItem';
import TodoForm from '../todo_list/TodoForm';

const TodoList = ({ todos, receiveTodo }) => {
  return (
    <div>
      <ul>
        { todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  )
}

export default TodoList
