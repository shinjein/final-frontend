// name of the city clicked on
// contacts based in this city
// connections based in this city of contacts in other cities
// if you have a contact outside of this ci// the connetions list will show the contact's connections based in this city.

//child components: ListCityContacts / contacts based in city
//child components: ListCityConnections / connections based in city

import React from "react";
import { citycontacts } from "../api"
import { NavLink } from "react-router-dom";
import Search from "./Searchbar";

class City extends React.Component {
  state = {
    contacts: [],
    city: this.props.match.params.city,
    userID: this.props.loggedInUser._id
  };

  async componentDidMount() {
    const contactsArr = await citycontacts(this.state.city)
const contacts = contactsArr.data.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t === thing
  ))
)
    this.setState({
      contacts: contacts
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
      <Search />
        <h2>{this.state.city} >></h2>
        <hr />
        <ul>
     {this.state.contacts.map((contact, index) => {
          return (
            <NavLink exact to={`/c/${city}/${contact}`}
              style={{
              fontSize:"25px",
              textDecoration: "none"
            
            }}>
              <li key={index}>@ {contact}</li>
            </NavLink>
          )
      })}  
      </ul>
      <hr />
      <button onClick={this.goBack}>go back</button>
      </>
    )
  }
}

export default City;