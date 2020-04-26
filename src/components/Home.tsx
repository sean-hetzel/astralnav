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
        <div className="grid-4">
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
          <div id="sign-up-container">
            <h1>Navigate Your Job Search</h1>
            <p>
              Track your job applications, networking evernts and interviews all
              in one place.
            </p>
            <Link className="btn-main btn" to="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
        <div className="grid-4 icon-info-container">
          <div className="center">
            <i className="tim-icons tim-icons-lg icon-planet teal" />
            <h3>
              Document the companies you've applied for and update their status so you know
              where you've been.
            </h3>
          </div>
          <div className="center">
            <i className="tim-icons tim-icons-lg icon-single-copy-04 teal" />
            <h3>
              Write custom cover letters, store your resume and links to speed
              up the application process.
            </h3>
          </div>
          <div className="center">
            <i className="tim-icons tim-icons-lg icon-compass-05 teal" />
            <h3>
              Gain insights such as when to follow up with a company or contact,
              and how to improve your search.
            </h3>
          </div>
          <div className="center">
            <i className="tim-icons tim-icons-lg icon-spaceship teal" />
            <h3>Get a job.</h3>
          </div>
        </div>
      </>
    );
  }
}
