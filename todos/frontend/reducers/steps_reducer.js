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
  }
};

const stepsReducer = (state = initialState, action) => {
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
