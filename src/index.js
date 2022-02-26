import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import Global from "./styles/globalStyles.js";

ReactDOM.render(
  <>
    <Routes /> <Global />
  </>,
  document.getElementById("root")
);
