import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ConfigStore from "./redux/store";

const store = ConfigStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

