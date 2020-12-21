import React, { Component } from "react";

export default class Example extends Component {
  constructor() {
    super();
    console.log("Coustructor call");
    this.state = {
      name: "awais",
    };
  }
  componentDidMount() {
    console.log("Component did mount call");
    this.setState(
      {
        name: "hassan",
      }
      //   () => {
      //     console.log("In callback", this.state.name);
      //   }
    );
    // console.log(this.state.name);
  }

  render() {
    console.log("Render call");
    return <div>{this.state.name}</div>;
  }
}
