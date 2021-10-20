import StepListContainer from "../step_list/StepListContainer";

const TodoDetailView = ({ todo, removeTodo }) => {

  const handleDelete = () => {
    removeTodo(todo);
  }

  return (
    <div>
      {todo.body}
      <button onClick={handleDelete}>Delete</button>
      <StepListContainer todoId={todo.id} />
    </div>
  )
}

export default TodoDetailView
