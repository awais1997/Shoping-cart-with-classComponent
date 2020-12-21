import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">
            Cart
            <span className="badge badge-pill badge-secondary m-2">
              {totalCounters.length}
            </span>
          </h1>
        </nav>
      </div>
    );
  }
}
