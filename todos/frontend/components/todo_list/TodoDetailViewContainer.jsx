import { connect } from 'react-redux';
import TodoDetailView from './TodoDetailView';
// import { allTodos } from '../../reducers/selectors';
import { removeTodo } from '../../actions/todo_actions';

const mSTP = (state, ownProps) => ({
  todo: ownProps.todo
})

const mDTP = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
})

export default connect(mSTP, mDTP)(TodoDetailView);
