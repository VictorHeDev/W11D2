import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      for (let td of action.todos) {
        newState[td.id] = td;
      }
      return newState;
    case RECEIVE_TODO:
      newState = Object.assign({}, state, {[action.todo.id]: action.todo});
      return newState;
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;

// Return the initial state if the state argument is undefined.
// Return the state if the reducer doesn't care about the action.
// Return a new state object if the reducer cares about the action.
