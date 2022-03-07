import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./components/store/reducer";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
