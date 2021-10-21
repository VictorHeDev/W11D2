import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/step_actions';

const stepsReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      for (let step of action.steps) {
        newState[step.id] = step;
      }
      return newState;
    case RECEIVE_STEP:
      newState = Object.assign({}, state, {[action.step.id]: action.step});
      return newState;
    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
