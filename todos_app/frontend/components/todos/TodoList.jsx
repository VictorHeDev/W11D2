import TodoListItem from '../todo_list/TodoListItem';
import TodoForm from '../todo_list/TodoForm';
import { useEffect } from 'react';

const TodoList = ({ todos, receiveTodo, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div>
      <ul>
        { todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />
        ))}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  )
}

export default TodoList
