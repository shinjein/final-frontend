import React from "react";
import { NavLink } from "react-router-dom";

class EditProfile extends React.Component {

  goBack = (e) => {
    const { history, loggedInUser } = this.props
    history.push(`/${loggedInUser.username}`)
  }

  render() {
    const { loggedInUser } = this.props
    return loggedInUser && (
      <div className="main-layout">
        <h4>Edit Profile</h4>
        <p>*you can only change your base city</p>
          <h5>👤 : @{loggedInUser.username}</h5> 
          <h5>📍 : {loggedInUser.base}</h5>
          <h5>📪 : {loggedInUser.email}</h5>
      <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <input
          placeholder="enter new city"
            type="text"
            name="base"
            value={loggedInUser.base}
            onChange={this.handleChange}
          />
        <button type="submit">Save Changes</button>

      </form>
        <footer className="footer-buttons">
        <NavLink to="/mycontacts">
          <button>contacts</button>
        </NavLink>
        <NavLink to="/editprofile">
          <button>edit</button>
        </NavLink>
        <NavLink to="/editprofile">
      <button onClick={this.goBack}>Back to Main</button>
        </NavLink>
        </footer>

      </div>
    )
  }
}

export default EditProfile;