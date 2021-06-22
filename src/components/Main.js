import React from "react";
import Search from "./Searchbar";
import ListedCities from "./ListedCities";

class Main extends React.Component {
  state = {
    userID: this.props.loggedInUser
  };

  setUserID = async () => {
    this.setState({
      userID: this.props.loggedInUser._id
    })
  }

  render() {
    const { loggedInUser } = this.props;
    const { userID } = this.state;
      return loggedInUser && (
        <div className="main-layout">
          <Search 
            userID={userID} 
            loggedInUser={loggedInUser}
            className="searchbar" />
          <ListedCities
            userID={userID}
            loggedInUser={loggedInUser}
          />
        </div>
      )
    }
}

export default Main;