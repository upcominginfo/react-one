import React from "react";
export default class ComponentDid_Mount extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.log("my cons");
  }
  componentDidMount() {
    this.setState({data:"hello"})
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Life hgg Cycle method in react js</h1>
      </div>
    );
  }
}
