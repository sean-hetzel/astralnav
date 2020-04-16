import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <nav >
        <a href="/" className="brand-img"><img src="" alt="Atral Nav"/></a>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-lg icon-world teal glow" />
          <h2 className="nav-text">Home</h2>
        </Link>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-lg icon-vector teal glow " />
          <h2 className="nav-text">Progress</h2>
        </Link>
        <Link className="btn nav-btn login" to="/">
          <i className="tim-icons tim-icons-lg icon-support-17 teal glow" />
          <h2 className="nav-text">Support</h2>
        </Link>
        <Link className="btn nav-btn login" to="/">
          <i className="tim-icons tim-icons-lg icon-single-02 teal glow" />
          <h2 className="nav-text">Login</h2>
        </Link>
      </nav>
    );
  }
}
