import React, { Component } from "react";

class ComponentWillUnmountF extends Component {
  constructor() {
    super();
    this.state = {
      toggle: null,
      check: null,
    };
    console.log("my constructor");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called ok");
  }
  render() {
    console.log("my render function called");
    return (
      <div>
        <h1>hello dsfff component Will unmount</h1>
        {this.state.toggle && <h1>SHowing the searchok</h1>}
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          DeleteUser
        </button>
      </div>
    );
  }
}

export default ComponentWillUnmountF;
