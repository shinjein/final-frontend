import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
// import Search from "./Searchbar";


function Navbar({ loggedInUser, setCurrentUser }){  

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

    return loggedInUser ? (
      <div className="loggedin-navbar">
        <NavLink to="/">
          <button onClick={logoutUser} className="logout-btn">
            Logout
          </button>
        </NavLink>
       {/* <Search userID={loggedInUser._id} loggedInUser={loggedInUser} /> */}
      </div>
    ) : (
      <div className="loggedout-navbar">
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
      </ul>
      </div>
  );
}

export default Navbar;