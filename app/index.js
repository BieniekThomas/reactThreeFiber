import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ExampleOne from "./examples/01_example/index.js";

class App extends React.Component {
  render() {
    return <ExampleOne />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
