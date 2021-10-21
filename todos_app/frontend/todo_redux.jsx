import React from "react";
import { render } from "react-dom";
import configureStore from './store/store';
import Root from './components/Root'

import { fetchTodos } from './actions/todo_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.fetchTodos = fetchTodos;
  render(<Root store={store} />, document.getElementById("root"));
})
