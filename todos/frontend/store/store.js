import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () =>
  // keep this for now
  createStore(rootReducer);

export default configureStore;
