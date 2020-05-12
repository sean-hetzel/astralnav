import React, { Component } from "react";
import TableCell from "./TableCell";

interface Props {}
interface State {}

export default class Table extends Component<Props, State> {
  state = {};

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Location</th>
            <th>Method</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          <TableCell/>
        </tbody>
      </table>
    );
  }
}
