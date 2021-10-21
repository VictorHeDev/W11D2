import React from "react";
import { render } from "react-dom";
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions'
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions'
import Root from './components/Root'
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById("root")
  console.log(root)

  render(<Root store={store} />, document.getElementById("root"));
})
