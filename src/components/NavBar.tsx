import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/astral-nav-logo-300x300.png";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <nav>
        <a href="/" id="brand-container" className="grid">
          <img src={logo} alt="Atral Nav" id="brand-img" />
          <h1 id="brand-text">ASTRAL NAV</h1>
        </a>
        <Link className="btn nav-btn" id="login" to="/signup">
          <i className="tim-icons tim-icons-lg icon-single-02 teal" />
        </Link>
        <Link className="btn nav-btn" to="#">
          Support
        </Link>
        <Link className="btn nav-btn" to="#">
          About
        </Link>
      </nav>
    );
  }
}
