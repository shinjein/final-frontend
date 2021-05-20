import React from "react";
// import { NavLink } from "react-router-dom";
import Search from "./Searchbar";
import { NavLink } from "react-router-dom";
import ListedCities from "./ListedCities";

class Main extends React.Component {
  state = {
    userID: this.props.loggedInUser
  };

  setUserId = async () => {
    this.setState({
      userID: this.props.loggedInUser._id
    })
  }

  goBack = (e) => {
    const { history, loggedInUser } = this.props
    history.push(`/${loggedInUser.username}`)
  }

  render() {
    const { userID } = this.state
    const { loggedInUser } = this.props
    return loggedInUser && (
      <div className="main-layout">
        <h4>MAIN PAGE</h4>
        <h5>👤 : @{loggedInUser.username}</h5>
        <h5>📍 : {loggedInUser.base}</h5>


        <Search userID={loggedInUser._id} loggedInUser={loggedInUser} />
        <ListedCities />
        <footer className="footer-buttons">
        <NavLink to="/mycontacts">
          <button>contacts</button>
        </NavLink>
        <NavLink to="/editprofile">
          <button>edit</button>
        </NavLink>
        </footer>

      </div>
    )
  }
}

export default Main;
