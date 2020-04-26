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
        <div id="astral-img"></div>
        <div id="sign-up-container">
          <h1>Navigate your Job Search</h1>
          <p>bla bla bla</p>
          
        </div>
      </>
    );
  }
}
