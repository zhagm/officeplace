import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const devTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : null;

const initialState = {};

const middleware = [thunk]; // array of all middleware to use

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware), devTools)
);

export default store;