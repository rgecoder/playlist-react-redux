import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"; //component made in the library
import { createStore } from "redux"; //store our Reducers are returns a redux Store

import App from "./components/App";

import reducers from "./reducers"; //import default combineReducers

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
