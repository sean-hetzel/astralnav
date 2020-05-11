import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Table from '../components/Table'

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
        Applications | Interviews
        <Table/>
      </>
    )
  }
}
