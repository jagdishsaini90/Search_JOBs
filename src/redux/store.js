import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import JOBS from "./jobs";

const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      jobs: JOBS,
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default ConfigStore;
