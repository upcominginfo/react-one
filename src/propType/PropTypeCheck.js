import React, { Component } from "react";
import PropTypes from "prop-types";
class PropTypeCheck extends Component {
  render() {
    return (
      <div>
        <h1>hello check prop types </h1>
        <h1>here is PropTypes</h1>
      </div>
    );
  }
}
PropTypeCheck.propTypes = {
  data1: PropTypes.number,
};
export default PropTypeCheck;
