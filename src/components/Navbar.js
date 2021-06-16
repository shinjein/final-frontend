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
        <NavLink to="/mycontacts" 
          activeStyle={{color: "orange"}}>
             <img src={imgContacts} alt="contax"
             className="img-contacts"
             style={{
               maxWidth:"35px"
             }} /> 
        </NavLink>
        <NavLink to="/" >
          <button onClick={logoutUser} className="logout-btn">
             <img src={imgLogout} alt="logout" style={{
               maxWidth:"35px",
               padding: "0px",
             }}/>
          </button>
        </NavLink>
      </section>
      </div>
    ) : (
    <div className="parent-logout-nav">
        <div className="econtacts">
          <img src={pagerLogo}
            alt="pager-logo"
            style={{
              maxWidth: "15%",
              margin: "auto"
            }}/>
          <NavLink
            className="econtacts-lnk"
            style={{
              marginLeft: "1rem",
              textDecoration: "none"
            }}
            exact to="/"
          >e-contacts</NavLink>
        </div>
                <div className="loggedout-navbar">
            <NavLink 
            className="logged-out-link" 
            style={{
              textDecoration:"none"
            }}
              exact to="/signup">
              <p className="logsign-txt">signup</p>
            </NavLink>
            <NavLink 
            className="logged-out-link" 
            style={{
              textDecoration:"none",

            }}
              exact to="/about">
              <p className="logsign-txt">about</p>
            </NavLink>
        <NavLink 
              className="logged-out-link" 
              style={{
              textDecoration:"none",
            }}
              exact to="/login">
              <p className="logsign-txt">login</p>
            </NavLink>
        </div>
      </div>
  );
}

export default Navbar;