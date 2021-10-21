import { connect } from 'react-redux';
import TodoList from './TodoList';
import { allTodos } from '../../reducers/selectors';
import { fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { fetchSteps } from '../../actions/step_actions';

const mSTP = (state) => ({
  todos: allTodos(state),
  errors: state.errors,
});

const mDTP = (dispatch) => ({
  fetchSteps: () => dispatch(fetchSteps()),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
});

export default connect(mSTP, mDTP)(TodoList);
