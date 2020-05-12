import React, { Component } from "react";

interface Props {}
interface State {}

export default class SearchBox extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div id="search-box">
        <i className="tim-icons tim-icons-lg icon-zoom-split teal" />
        <input type="text" />
      </div>
    );
  }
}
