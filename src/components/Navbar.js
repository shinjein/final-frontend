import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import imgLogout from "../logout2.png";
import imgContacts from "../contacts.png";
import pagerLogo from "../pagerlogo.png";
// import Search from "./Searchbar";


function Navbar({ loggedInUser, setCurrentUser }){  

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

    return loggedInUser ? (
      <div className="loggedin-navbar">
      <section className="nav-bar-user">
        <NavLink to="/profile"
         className="nav-user username"
         style={{
           textDecoration:"none",
         }}>
           @  &nbsp;{loggedInUser.username}&nbsp;
         </NavLink>
        <p className="nav-user">☖&nbsp;&nbsp;{loggedInUser.base}</p>
      </section>
      <section className="navbar-links">
        <NavLink to="/mycontacts" >
             <img src={imgContacts} alt="contax"
             className="img-contacts" /> 
        </NavLink>
        <NavLink to="/" >
          <button onClick={logoutUser} className="logout-btn">
             <img src={imgLogout} alt="logout" className="logout-btn-img"/>
          </button>
        </NavLink>
      </section>
      </div>
    ) : (
    <div className="parent-logout-nav">
      <div className="econtacts">
        <img src={pagerLogo}
          className="e-logo-img"
          alt="pager-logo"/>
          <NavLink className="econtacts-lnk"
            exact to="/">
            e-contacts
          </NavLink>
        </div>
        <div className="loggedout-navbar">
          <NavLink exact to="/signup"
            className="loggedout-link"
            activeClassName="underline"
          >
            signup
          </NavLink>
          <NavLink exact to="/about"
            className="loggedout-link" 
            activeClassName="underline">
              about
          </NavLink>
          <NavLink exact to="/login"
            className="loggedout-link"
            activeClassName="underline">
              login
          </NavLink>
        </div>
      </div>
  );
}

export default Navbar;