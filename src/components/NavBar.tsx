import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-32 icon-sound-wave teal glow" />Progress
        </Link>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-32 icon-world teal glow" /> Home
        </Link>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-32 icon-spaceship teal glow" /> Sign Up
        </Link>
      </>
    );
  }
}
