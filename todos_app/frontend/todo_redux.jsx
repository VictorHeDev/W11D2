import React from "react";
import { render } from "react-dom";
import configureStore from './store/store';
import Root from './components/Root'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  render(<Root store={store} />, document.getElementById("root"));
})
