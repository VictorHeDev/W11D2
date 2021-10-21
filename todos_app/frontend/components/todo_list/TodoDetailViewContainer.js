import { connect } from 'react-redux';
import TodoDetailView from './TodoDetailView';
import { deleteTodo } from '../../actions/todo_actions';

const mDTP = (dispatch) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
})

export default connect(null, mDTP)(TodoDetailView);
