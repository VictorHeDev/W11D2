import { createStore, applyMiddleware } from 'redux';
import thunk from "../middleware/thunk"
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) =>
  // keep this for now
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
