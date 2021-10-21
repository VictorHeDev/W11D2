import { connect } from 'react-redux';
import TodoDetailView from './TodoDetailView';
import { removeTodo } from '../../actions/todo_actions';

const mDTP = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
})

export default connect(null, mDTP)(TodoDetailView);
