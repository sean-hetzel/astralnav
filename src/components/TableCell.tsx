import React, { Component } from 'react'

interface Props {
  
}
interface State {
  
}

export default class TableCell extends Component<Props, State> {
  state = {}

  render() {
    return (
      <tr>
        <td>Tesla</td>
        <td>UI Designer</td>
        <td>Sparks Nevada</td>
        <td>Company Website</td>
        <td>5/11/2020</td>
        <td>Interviewing</td>
      </tr>
    )
  }
}
