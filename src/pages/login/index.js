import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        Login Page
        <br />
        <Link to="/">Go back</Link>
      </div>
    );
  }
}
