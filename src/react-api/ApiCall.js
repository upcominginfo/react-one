import React, { Component } from "react";

class ApiCall extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2").then((resp) => {
      console.log("resp", resp);
      resp.json().then((result) => {
        console.log("result", result);
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    console.log("this.state.users", this.state.users);
    return (
      <div>
        <h1>Api call</h1>
        {this.state.users.length &&
          this.state.users.map((v,in_) => {
            return <h1 key={in_}>{v.id}</h1>;
          })}
      </div>
    );
  }
}

export default ApiCall;
