import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/step_actions';

// testing testing
const initialState = {
  1: {
    id: 1,
    title: 'wash wheels',
    description: '1111111',
    done: false,
    todoId: 1,
  },
  2: {
    id: 2,
    title: 'wash windows',
    description: '22222',
    done: true,
    todoId: 1,
  },aasdasd
};

const stepsReducer = (state = initialState, action) => {
  let newSteps = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      for (let step of action.steps) {
        newSteps[step.id] = step;
      }
      return newSteps;
    case RECEIVE_STEP:
      newSteps = Object.assign({}, state);
      newSteps[action.step.id] = action.step;
      return newSteps;
    case REMOVE_STEP:
      newSteps = Object.assign({}, state);
      delete newSteps[action.step.id];
      return newSteps;
    default:
      return state;
  }
};

export default stepsReducer;
