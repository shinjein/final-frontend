import React from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ListedCities from "./ListedCities";

class Main extends React.Component {
  state = {
    userID: this.props.loggedInUser._id
  };


  render() {
    const { userID } = this.state
    const { loggedInUser } = this.props
    return userID ? (
      <>
      <h4>Logged-in as: {loggedInUser.screenname}</h4>
      <Navbar userID={userID} />
      <ListedCities userID={userID} />
      </>
    ) : ( 
      <>
      <ul>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/signup">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
      </ul>
      </>

    )
  }
}

export default Main;
