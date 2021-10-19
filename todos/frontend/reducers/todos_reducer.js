import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false,
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true,
  },
};

const todosReducer = (state = initialState, action) => {
  // Object.freeze(state);
  // const nextState

  switch (action.type) {
    case RECEIVE_TODOS:
      state.todos = acti;

    default:
      return state;
  }
};

export default todosReducer;

// Return the initial state if the state argument is undefined.
// Return the state if the reducer doesn't care about the action.
// Return a new state object if the reducer cares about the action.
