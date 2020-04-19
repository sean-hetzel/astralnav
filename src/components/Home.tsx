import React, { Component } from "react";
import NavBar from "./NavBar";

interface Props {}
interface State {}

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <NavBar />
      </>
    );
  }
}
