import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const rootElement = document.createElement("div");
rootElement.setAttribute("id", "root");
document.getElementsByTagName("body")[0].appendChild(rootElement);

ReactDOM.render(<App />, document.getElementById("root"));