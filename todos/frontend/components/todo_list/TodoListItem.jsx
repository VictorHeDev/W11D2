const TodoListItem = ({ todo, receiveTodo, removeTodo }) => {
  const handleDelete = () => {
    removeTodo(todo);
  }

  const toggleTodo = () => {
    todo.done = !todo.done;
    receiveTodo(todo);
  }

  return (
    <li>
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={toggleTodo}>Toggle Status</button>
      {todo.done ? "Done" : "Not done"}
    </li>
  )
}

export default TodoListItem
