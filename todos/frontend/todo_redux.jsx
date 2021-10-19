import React from "react";
import { render } from "react-dom";
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions'

render(<h1>Hello world</h1>, document.getElementById("root"));
window.store = configureStore();


const newTodos = [{ id: 1, title: "new1" }, { id: 2, title: "new2" }];
console.log(store.getState()); // should return default state object
store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
console.log(store.getState()); // should include the newly added todo
store.dispatch(receiveTodos(newTodos));
console.log(store.getState()); // should return only the new todos

store.dispatch(removeTodo({ id: 2, title: "new2" }));
console.log(store.getState());
