import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

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
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
