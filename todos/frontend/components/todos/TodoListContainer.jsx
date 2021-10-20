import { connect } from 'react-redux';
import TodoList from './TodoList';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';

const mSTP = (state) => ({
  todos: allTodos(state)
})

const mDTP = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
})

export default connect(mSTP, mDTP)(TodoList);
