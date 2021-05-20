import React from "react";
import { NavLink } from "react-router-dom";
import { signup } from "../api";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email:"",
    base: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, password, email, base } = this.state;
    await signup( username, password, email, base);
    this.props.history.push("/login");
  };

  render() {
    const { username, password, email, base } = this.state;
    return (
      <div className="form-div">
        <form onSubmit={this.handleFormSubmit} className="forms">
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="e-mail"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
          placeholder="base city"
            type="text"
            name="base"
            value={base}
            onChange={this.handleChange}
          />
          <button className="signup-btn">Signup</button>
        <p>*you can only change your base city, choose username and email wisely.</p>

        <p>
          Already have account?
          <NavLink to="/login"> Login</NavLink>
        </p>
        </form>
      </div>
    );
  }
}

export default Signup;
