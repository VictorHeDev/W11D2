import TodoDetailViewContainer from "./TodoDetailViewContainer";
import { useState } from 'react';


const TodoListItem = ({ todo, receiveTodo }) => {
  const [detail, setDetail] = useState(false);

  const toggleTodo = () => {
    todo.done = !todo.done;
    receiveTodo(todo);
  }


  return (
    <li>
      <div onClick={() => setDetail(!detail)}>
        {todo.title}
      </div>
      <button onClick={toggleTodo}>Toggle Status</button>
      {todo.done ? "Done" : "Not done"}
      { detail && <TodoDetailViewContainer todo={todo} /> }
    </li>
  )
}

export default TodoListItem
