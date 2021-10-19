import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

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
    case REMOVE_TODO:
      for (let [k, v] of Object.entries(state)) {
        if (v.id !== action.todo.id) {
          newTodos[k] = v;
        }
      }
      return newTodos;
    default:
      return state;
  }
};

export default todosReducer;

// Return the initial state if the state argument is undefined.
// Return the state if the reducer doesn't care about the action.
// Return a new state object if the reducer cares about the action.
