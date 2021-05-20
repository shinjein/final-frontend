import React from "react";
import { NavLink } from "react-router-dom";
import { connections } from "../api";

class CityConnections extends React.Component {
  state = {
    connections: [],
    city: this.props.match.params.city,
    contact: this.props.match.params.contact,
    userID: this.props.loggedInUser._id
  };

  async componentDidMount() {
    const { contact, city } = this.state 
    const getConnections = await connections(contact, city)
    this.setState({
      contacts: getConnections.data
    })
  }

  render() {
    const { loggedInUser } = this.props
    const { city, connections, contact } = this.state
    return (
      <div className="main-layout">
        <h5>👤 : @{loggedInUser.username}</h5>
        <h5>📍 : {loggedInUser.base}</h5>
        <h4>{contact}</h4>
        <h4>{city}</h4>
        <section>
          <ul>
       {this.state.connections.map((user, index) => {
          return (
            <NavLink exact to={`/profile/${contact}`}>
              <li key={index}>{user}</li>
            </NavLink>
              )
          })} 
          </ul>
        </section>
      </div>
    )
  }

}


export default CityConnections;