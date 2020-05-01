import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Button } from 'reactstrap';

interface Props {
  
}
interface State {
  
}

export default class Applications extends Component<Props, State> {
  state = {}

  render() {
    return (
      <>
        <NavBar/>
        Applications
        <Button color="danger">Danger!</Button>
      </>
    )
  }
}
