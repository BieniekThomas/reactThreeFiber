import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

import "./index.scss";
import "./navigation.scss";

import Wrapper from "./util/wrapper/wrapper";
const ExampleOne = loadable(() => import("./examples/01_example/index"));
const HelloCube = loadable(() => import("./examples/02_own-example/index"));
const SplitText = loadable(() => import("./examples/03_split_text/index"));
const NotFound = loadable(() => import("./pages/404"));

const TransitionRouter = (location) => {
  // const [route, setRoute] = useState(location);
  // const transition = useTransition(route, (r) => r.pathname, {
  //   // initial: null,
  //   from: { opacity: 0, transform: "translateX(100px)" },
  //   enter: { opacity: 1, transform: "translateX(0)" },
  //   leave: { opacity: 0, transform: "translateX(50px)" },
  //   unique: true,
  //   reset: true,
  // });

  return (
    <>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <HelloCube />
          </Route>
          <Route path="/example_1">
            <ExampleOne />
          </Route>
          <Route path="/splitText">
            <SplitText path="splitText" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <div id="navigation">
          <nav>
            <Link to="/">HelloCubes</Link>
            <Link to="/example_1">Example_1</Link>
            <Link to="/splitText">SplitText</Link>
          </nav>
        </div>
        <TransitionRouter />
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
