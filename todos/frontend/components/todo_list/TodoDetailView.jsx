

const TodoDetailView = ({ todo, removeTodo }) => {

  const handleDelete = () => {
    removeTodo(todo);
  }

  return (
    <div>
      {todo.body}
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoDetailView
