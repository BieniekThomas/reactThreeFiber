import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import "./index.scss";
import "./navigation.scss";

import ExampleOne from "./examples/01_example/index";
import HelloCube from "./examples/02_own-example/index";
import SplitText from "./examples/03_split_text/index";
import Wrapper from "./util/wrapper/wrapper";

class App extends React.Component {
  render() {
    return (
      <>
        <div id="navigation">
          <nav>
            <Link to="/">HelloCubes</Link>
            <Link to="example_1">Example_1</Link>
            <Link to="splitText">SplitText</Link>
          </nav>
        </div>
        <Router>
          <Wrapper path="/">
            <HelloCube path="/" />
            <ExampleOne path="example_1" />
            <SplitText path="splitText" />
          </Wrapper>
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
