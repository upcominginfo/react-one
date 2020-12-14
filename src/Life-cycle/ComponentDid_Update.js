import React from "react";
export default class ComponentDidUpdatePr extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      who: null,
    };
    console.log("my constructor");
  }
  // componentDidMount() {
  //   this.setState({ data: "hello" });
  //   console.log("componentDidMount");
  // }
  componentDidUpdate() {
    // this.setState({ data: "hello" });
    console.log("componentDidUpdate Called");
    if (this.state.who == null) this.setState({ who: "this.state.who null to any value assign " });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>componentDid_Update method state who -> {this.state.who}</h1>
        <button
          onClick={() => {
            this.setState({ active: "yes" });
          }}
        >
          ACtive
        </button>
      </div>
    );
  }
}
