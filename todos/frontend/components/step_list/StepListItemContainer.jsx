import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/step_actions';
import StepListItem from './StepListItem'

const mSTP = (state, ownProps) => ({
  step: ownProps.step
})

const mDTP = (dispatch) => ({
  removeStep: (step) => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
})

export default connect(mSTP, mDTP)(StepListItem);
