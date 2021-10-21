import TodoListItem from '../todo_list/TodoListItem';
import TodoForm from '../todo_list/TodoForm';
import { useEffect } from 'react';

const TodoList = ({ todos, receiveTodo, fetchTodos, createTodo }) => {
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
      <TodoForm createTodo={createTodo} />
    </div>
  )
}

export default TodoList
