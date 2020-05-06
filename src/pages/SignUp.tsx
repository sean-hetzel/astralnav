import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import TropicalImg from "../images/astral-nav-dawn.svg";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

interface State {}

export default class SignUp extends Component<Props, State> {
  state = {};

  render() {
    return (
      // <div id="signup-page">
      <>
        <div id="form-container">
          <SignUpForm />
        </div>
        <img src={TropicalImg} alt="tropical dawn" />
        {/* </div> */}
      </>
    );
  }
}
