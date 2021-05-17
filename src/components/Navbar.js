import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import Search from "./Searchbar";


function Navbar({ loggedInUser, setCurrentUser }){  

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
    return loggedInUser ? (
      <>
        <NavLink to="/">
          <button onClick={logoutUser}>Logout</button>
        </NavLink>
       <Search userID={loggedInUser._id} />
      </>
    ) : (
      <>
      <p>not logged in</p>
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
      </>
  );
}

export default Navbar;
