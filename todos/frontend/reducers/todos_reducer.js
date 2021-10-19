import { bindActionCreators } from 'redux';
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
  let newTodos = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      for (let td of action.todos) {
        newTodos[td.id] = td;
      }
      return newTodos;
    case RECEIVE_TODO:
      newTodos = Object.assign({}, state);
      newTodos[action.todo.id] = action.todo;
      return newTodos;
    default:
      return state;
  }
};

export default todosReducer;

// Return the initial state if the state argument is undefined.
// Return the state if the reducer doesn't care about the action.
// Return a new state object if the reducer cares about the action.
