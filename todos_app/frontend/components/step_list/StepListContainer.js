import { connect } from 'react-redux';
import StepList from './StepList';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';

const mSTP = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todoId)
})

const mDTP = (dispatch) => ({
  receiveStep: (todo) => dispatch(receiveStep(todo)),
})

export default connect(mSTP, mDTP)(StepList);
