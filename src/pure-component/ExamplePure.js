import React, { Component, PureComponent } from "react";

class ExamplePure extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: 10,
    };
  }
  render() {
    console.log("cansole...this.state", this.state.data);
    return (
      <div>
        <h1>hello word</h1>
        <button
          onClick={() => {
            this.setState({ data: 20 });
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default ExamplePure;
