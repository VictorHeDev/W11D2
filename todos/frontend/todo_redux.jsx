import React from "react";
import { render } from "react-dom";
import configureStore from './store/store';

render(<h1>Hello world</h1>, document.getElementById("root"));
window.store = configureStore();