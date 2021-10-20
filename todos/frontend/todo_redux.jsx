import React from "react";
import { render } from "react-dom";
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions'
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions'
import Root from './components/Root'
import { allTodos } from './reducers/selectors';

const store = configureStore();
render(<Root store={store} />, document.getElementById("root"));


// window.store = configureStore();

// const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2 }];
// const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }, { id: 2 }];
// store.dispatch(receiveTodos(newTodos));
// store.dispatch(receiveSteps(newSteps));
// console.log(store.getState()); // should return only the new todos and steps

// store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
// store.dispatch(receiveStep({ id: 3, title: "New Step", todo_id: 2, done: false }));
// console.log(store.getState()); // should include the newly added todo and step

// store.dispatch(receiveTodo({ id: 3, title: "Newer Todo" }));
// store.dispatch(receiveStep({ id: 3, title: "Newer Step", done: true, todo_id: 3 }));
// console.log(store.getState()); // should update the previously added todo and step

// store.dispatch(removeTodo({ id: 3, title: "Newer Todo" }));
// store.dispatch(removeStep({ id: 3, title: "Newer Step", done: true, todo_id: 3 }));
// console.log(store.getState()); // should not include the previously added todo
