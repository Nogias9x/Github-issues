import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootSaga from "./sagas/rootSaga";
//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import myReducer from "./reducers";
//Redux Saga
import createSagaMiddleware from "redux-saga";
// Middleware
const sagaMiddleware = createSagaMiddleware();

var store = createStore(myReducer, applyMiddleware(sagaMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

sagaMiddleware.run(rootSaga);
