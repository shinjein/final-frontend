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
    const getConnections = await connections(this.state.city, this.state.contact)
    this.setState({
      connections: getConnections.data
    })
  }

  render() {
    const { loggedInUser } = this.props
    const { city, connections, contact } = this.state
    return (
      <div className="main-layout">
        <hr/>
        <h4>@{contact}'s contacts in: </h4>
          <h3>{city}</h3>
        <hr/>
        <section>
          <ul>
       {this.state.connections.map((user, index) => {
          return (
            <NavLink exact to={`/profile/${contact}`}
            style={{
              fontSize:"25px",
              textDecoration: "none"
            }}>
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