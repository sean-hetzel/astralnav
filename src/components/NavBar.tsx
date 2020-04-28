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
        <Link to="/" id="brand-container" className="grid">
          <img src={logo} alt="Atral Nav" id="brand-img" />
          <h1 id="brand-text">ASTRAL NAV</h1>
        </Link>
        <Link to="/signup" className="btn nav-btn" id="login" >
          <i className="tim-icons tim-icons-lg icon-single-02 teal" />
        </Link>
        <Link to="/support" className="btn nav-btn" >
          Support
        </Link>
        <Link to="/about" className="btn nav-btn" >
          About
        </Link>
      </nav>
    );
  }
}
