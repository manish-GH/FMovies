import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { KeywordProvider } from "./context/KeywordProvider";

ReactDOM.render(
  <Router>
    <KeywordProvider>
      <App />
    </KeywordProvider>
  </Router>,
  document.getElementById("root")
);
