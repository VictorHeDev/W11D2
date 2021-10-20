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
    done: false,
    todoId: 1,
  },
  2: {
    id: 2,
    title: 'wash windows',
    done: true,
    todoId: 1,
  },
};

const stepsReducer = (state = initialState, action) => {
  let newSteps = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      for (let td of action.steps) {
        newSteps[td.id] = td;
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
