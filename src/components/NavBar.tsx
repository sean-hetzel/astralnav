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
          <a href="/" id="brand-link">
            <img src={logo} alt="Atral Nav" id="brand-img" />
            <h1 id="brand-text">ASTRAL NAV</h1>
          </a>
        {/* <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-lg icon-world teal" />
          <h4 className="nav-text">Home</h4>
        </Link>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-lg icon-vector teal " />
          <h4 className="nav-text">Progress</h4>
        </Link>
        <Link className="btn nav-btn" to="/">
          <i className="tim-icons tim-icons-lg icon-support-17 teal" />
          <h4 className="nav-text">Support</h4>
        </Link> */}
        {/* <Link className="btn nav-btn " id="login" to="/">
          <i className="tim-icons tim-icons-lg icon-single-02 teal" />
        </Link> */}
      </nav>
    );
  }
}
