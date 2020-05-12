import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import ApplicationForm from '../components/ApplicationForm'
import SearchBox from '../components/SearchBox'

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
        <h1 className="page-header">Add Application</h1>
        <ApplicationForm />
        <h1 className="page-header">Applications</h1>

        <SearchBox/>
        <Table/>
      </>
    )
  }
}
