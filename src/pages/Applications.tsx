import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import ApplicationForm from '../components/ApplicationForm'

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
        <ApplicationForm />
        <Table/>
      </>
    )
  }
}
