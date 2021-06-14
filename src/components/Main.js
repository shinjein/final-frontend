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
        <Search 
          userID={loggedInUser._id} 
          loggedInUser={loggedInUser}
          className="searchbar" />
        <ListedCities />
        <NavLink to="/editprofile">
          <button>edit</button>
        </NavLink>
      </div>
    )
  }
}

export default Main;
