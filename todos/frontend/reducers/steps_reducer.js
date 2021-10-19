import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash wheels',
//     done: false,
//     todo_id: 1
//   },
//   2: {
//     id: 2,
//     title: 'wash windows',
//     done: true,
//     todo_id: 1
//   },
// };

const stepsReducer = (state = {}, action) => {
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
      for (let [k, v] of Object.entries(state)) {
        if (v.id !== action.step.id) {
          newSteps[k] = v;
        }
      }
      return newSteps;
    default:
      return state;
  }
};

export default stepsReducer;
