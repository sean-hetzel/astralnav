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
        <div className="system">
          <div className="star young small"></div>
          <div className="planet large">
            <div className="moon"></div>
          </div>
          <div className="planet">
            <div className="belt"></div>
          </div>
          <div className="asteroids"></div>
          <div className="planet"></div>
          <div className="belt"></div>
          <div className="planet small"></div>
          <div className="planet small"></div>
          <div className="belt"></div>
        </div>
        <div id="sign-up-container">
          <h1>Navigate your Job Search</h1>
          <p>bla bla bla</p>
        </div>
      </>
    );
  }
}
