import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import "./index.scss";

import Wrapper from "./util/wrapper/wrapper";
import ExampleOne from "./examples/01_example/index";
import HelloCube from "./examples/02_own-example/index";
import SplitText from "./examples/03_split_text/index";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <HelloCube path="home" />
          <ExampleOne path="example_1" />
          <SplitText path="splitText" />
        </Router>
        <Wrapper>
          <HelloCube />
          <ExampleOne />
          <SplitText />
        </Wrapper>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
