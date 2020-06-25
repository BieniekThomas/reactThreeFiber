import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ExampleOne from "./examples/01_example/index.js";
import HelloCube from "./examples/02_own-example/index";

class App extends React.Component {
  render() {
    return <HelloCube />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
