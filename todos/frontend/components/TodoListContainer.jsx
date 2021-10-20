import { connect } from 'react-redux';
import TodoList from './TodoList';
import { allTodos } from '../reducers/selectors';

const mSTP = (state) => ({
  todos: allTodos(state)
})

export default connect(mSTP, null)(TodoList);
