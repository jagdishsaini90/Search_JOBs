import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import JOBS from "./jobs";

// Main Store for the Web App
const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      jobs: JOBS,
    }),
    // Middleware for async requests
    applyMiddleware(thunk)
  );

  return store;
};

export default ConfigStore;
