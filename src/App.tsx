import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Support from "./components/Support";

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/about" exact render={(props) => <About {...props} />} />
          <Route path="/support" exact render={(props) => <Support {...props} />} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
