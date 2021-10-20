import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      { todos.map((todo, idx) => (
        <TodoListItem key={idx} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
