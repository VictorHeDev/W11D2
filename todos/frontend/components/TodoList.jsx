const TodoList = ({ todos }) => {
  return (
    <ul>
      { todos.map(todo => {
        return (
          <li>{todo.title}</li>
        )
      })}
    </ul>
  )
}

export default TodoList
