import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./app/App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./app/store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ScrollToTop from "./app/layout/ScrollToTop";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
