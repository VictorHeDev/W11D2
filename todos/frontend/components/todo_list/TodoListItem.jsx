const TodoListItem = ({ todo, receiveTodo, removeTodo }) => {
  const handleDelete = e => {
    e.preventDefault();
    removeTodo(todo);
  }

  return (
    <li>
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default TodoListItem
