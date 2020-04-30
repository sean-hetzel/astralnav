import React, { Component } from "react";
import { Link } from "react-router-dom";


interface Props {}
interface State {}

export default class SignUpForm extends Component<Props, State> {
  state = {};

  render() {
    return (
      <form>
        <Link className="btn-main btn" to="/applications">
          <span>Sign Up</span>
        </Link>
      </form>
    );
  }
}
