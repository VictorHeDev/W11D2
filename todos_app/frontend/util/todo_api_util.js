export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos',
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    method: 'post',
    url: '/api/todos',
    data: { todo },
  });
};

export const updateTodo = (todo) => {
  return $.ajax({
    method: 'patch',
    url: `/api/todos/${todo.id}`,
    data: { todo },
  });
};

export const deleteTodo = (todo) => {
  return $.ajax({
    method: 'delete',
    url: `/api/todos/${todo.id}`,
    data: { todo },
  });
}
