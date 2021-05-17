import React from "react";
import { NavLink } from "react-router-dom";
import { signup } from "../api";

class Signup extends React.Component {
  state = {
    username: "",
    screenname: "",
    email: "",
    password: "",
    base: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, screenname, email, password, base } = this.state;
    await signup( username, screenname, email, password, base);
    this.props.history.push("/login");
  };

  render() {
    const { username, screenname, email, password, base } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Screen Name:</label>
          <input
            type="text"
            name="screenname"
            value={screenname}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>Base City:</label>
          <input
            type="text"
            name="base"
            value={base}
            onChange={this.handleChange}
          />
          <button>Signup</button>
        </form>
        <p>
          Already have account?
          <NavLink to="/login"> Login</NavLink>
        </p>
      </>
    );
  }
}

export default Signup;
