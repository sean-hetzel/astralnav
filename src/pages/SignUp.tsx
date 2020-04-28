import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

interface State {
  
}

export default class SignUp extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div id="signup-page">
        <SignUpForm/>
    </div>
    )
  }
}
