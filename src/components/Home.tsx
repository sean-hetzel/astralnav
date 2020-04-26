import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <h1>Navigate Your Job Search</h1>
          <p>bla bla bla</p>
          <Link className="btn-main btn" id="login" to="/signup">
            <span>Sign Up</span>
          </Link>
        </div>
      </>
    );
  }
}
