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
        <h2>{city}</h2>
        <hr/>
        <h3> &nbsp;>>>{contact}</h3>
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