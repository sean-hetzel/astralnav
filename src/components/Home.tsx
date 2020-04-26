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
        <div className="grid">
        <div></div>
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
          <div></div>
          <div id="sign-up-container">
            <h1>Navigate Your Job Search</h1>
            <p>Track your job applications, networking evernts and interviews all in one place. </p>
            <Link className="btn-main btn" to="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
