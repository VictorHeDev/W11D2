import TodoListItem from '../todo_list/TodoListItem';
import TodoForm from '../todo_list/TodoForm';
import { useEffect } from 'react';

const TodoList = ({ todos, fetchSteps, fetchTodos, createTodo, errors, updateTodo }) => {
  useEffect(() => {
    fetchTodos();
    fetchSteps();
  }, [])

  return (
    <div>
      <ul>
        { todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} updateTodo={updateTodo} />
        ))}
      </ul>
      <TodoForm createTodo={createTodo} errors={errors} />
    </div>
  )
}

export default TodoList
