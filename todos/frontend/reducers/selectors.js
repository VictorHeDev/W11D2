export const allTodos = ({ todos }) => Object.values(todos);
export const stepsByTodoId = (state, todoId) => {
  return Object.values(state.steps).filter((step) => step.todo_id === todoId);
};
