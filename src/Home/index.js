import React from "react";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "rahul",
      email: "not given Email",
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <h1
          onClick={() => {
            let enc = this.state.count + 1;
            this.setState({ count: enc });
          }}
        >
          Home Page Class Component
        </h1>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}
