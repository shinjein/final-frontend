// name of the city clicked on
// contacts based in this city
// connections based in this city of contacts in other cities
// if you have a contact outside of this ci// the connetions list will show the contact's connections based in this city.

//child components: ListCityContacts / contacts based in city
//child components: ListCityConnections / connections based in city

import React from "react";
import { citycontacts } from "../api"
// import CityContacts from "./CityContacts"
import { NavLink } from "react-router-dom";

class City extends React.Component {
  state = {
    contacts: [],
    city: this.props.match.params.city,
    userID: this.props.loggedInUser._id
  };

  async componentDidMount() {
    const contacts = await citycontacts(this.state.city)
    console.log(contacts.data)
    this.setState({
      contacts: contacts.data
    })
  }
  
  goBack = (e) => {
    const { history, loggedInUser } = this.props
    history.push(`/${loggedInUser.username}`)
  }

  render() {
    const { loggedInUser } = this.props;
    const { city } = this.state
    return(
      <>
        <h5>👤 : @{loggedInUser.username}</h5>
        <h5>📍 : {loggedInUser.base}</h5>
        <h4>{this.state.city} </h4>
        ___
        <ul>
       {this.state.contacts.map((contact, index) => {
          return (
            <NavLink exact to={`/c/${city}/${contact}`}>
              <li key={index}>{contact}</li>
            </NavLink>
          )
      })} 
      </ul>
      <button onClick={this.goBack}>go back</button>
      </>
    )
  }
}

export default City;