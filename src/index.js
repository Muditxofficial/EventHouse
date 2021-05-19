import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import "semantic-ui-css/semantic.min.css";
import "./app/App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./app/store/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import ScrollToTop from "./app/layout/ScrollToTop";
const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
