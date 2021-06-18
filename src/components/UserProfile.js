import React from "react";
import { NavLink } from "react-router-dom";

class UserProfile extends React.Component {
state = {
  updateBase: "",
}
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  goBack = (e) => {
    const { history, loggedInUser } = this.props
    history.push(`/${loggedInUser.username}`)
  }

  render() {
    const { loggedInUser } = this.props
    return loggedInUser && (
      <div className="main-layout">
        <div>
        <h2>User Profile</h2>
          <h5>👤 : {loggedInUser.username}</h5> 
          <h5>📍 : {loggedInUser.base}</h5>
          <h5>📪 : {loggedInUser.email}</h5>
        </div>
      <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <input
          placeholder="enter new city"
            type="text"
            name="base"
            value={this.state.updateBase}
            onChange={this.handleChange}
          />
        <button type="submit">Save Changes</button>

      </form>
      <button onClick={this.goBack}> back </button>
      </div>
    )
  }
}

export default UserProfile;