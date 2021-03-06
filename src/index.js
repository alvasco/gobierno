import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  divRoot
);
