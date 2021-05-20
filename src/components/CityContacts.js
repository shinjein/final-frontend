import React from "react";
import { NavLink } from "react-router-dom";
import { connections } from "../api";

class CityConnection extends React.Component {
  state = {
    connections: [],
    city: this.props.match.params.city,
    contact: this.props.match.params.contact,
    userID: this.props.loggedInUser._id
  };

  async componentDidMount() {
    const { contact, city } = this.state 
    const getConnections = await connections(contact, city)
    console.log(getConnections.data)
    this.setState({
      contacts: contacts.data
    })
  }

  }

  render() {
    const { loggedInUser, setCurrentUser, history } = this.props
    return (
      <div className="main-layout">
        <h4>CITY CONTACTS PAGE</h4>
        {/* <h5>Logged-in as: {loggedInUser.username}</h5>
        <h5>in {loggedInUser.base}</h5>
        <ListMyContacts  loggedInUser={loggedInUser}/>
        <NavLink to={{  
          pathname:"/addcontact",
          aboutProps: {
            userID: this.state 
          }
        }}> Add to list </NavLink>  */}
      </div>
    )
  }
}

export default CityConnection;