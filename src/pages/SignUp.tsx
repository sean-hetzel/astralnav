import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import LiftOffImg from "../images/astral-nav-dawn-2.svg";

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
      <>
        <div id="form-container">
          <SignUpForm />
        </div>
        <img id="lift-off-img" src={LiftOffImg} alt="rocket lifting off at dawn"/>
      </>
    );
  }
}
