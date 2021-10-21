import { connect } from 'react-redux';
import TodoList from './TodoList';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';

const mSTP = (state) => ({
  todos: allTodos(state)
})

const mDTP = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
})

export default connect(mSTP, mDTP)(TodoList);
