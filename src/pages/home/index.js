import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        This is home
        <br />
        <Link to="login">Page 2</Link>
      </div>
    );
  }
}
