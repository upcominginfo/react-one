import React, { Component } from "react";

class UseReff extends Component {
  constructor() {
    super();
    this.firstRef = React.createRef();
  }
  focusInput() {
    console.log("yes");
    this.firstRef.current.focus();
    this.firstRef.current.value = 200000;
  }
  render() {
    return (
      <div>
        <h1>my use Ref example</h1>
        <input ref={this.firstRef} type="text" />
        <button onClick={() => this.focusInput()}>click me</button>
      </div>
    );
  }
}

export default UseReff;
