import StepListContainer from "../step_list/StepListContainer";

const TodoDetailView = ({ todo, deleteTodo }) => {

  const handleDelete = () => {
    deleteTodo(todo);
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
