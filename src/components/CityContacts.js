import React from "react";
import { citycontacts } from "../api";
import { deleteCity } from "../api";
import { NavLink } from "react-router-dom";

class CityContacts extends React.Component {
state = {
    contacts: [],
    cities: this.props.setCities,
    city: this.props.cityName,
    userID: this.props.userID,
    };

  handleDeleteCity = async (event) => {
    const { city } = this.state;
    await deleteCity(city);
    this.setState({

    })
  };

  async componentDidMount() {
    const contactsArr = await citycontacts(this.state.city)
    const contacts = contactsArr.data.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t === thing
      )))
    this.setState({
      contacts: contacts
    })
  }

render() {
    const { contacts, city } = this.state
    return contacts.length === 0 ? (
      <>
      <p className="p-no-contacts">you have no contacts with friends in this city...</p>
       
       <form onSubmit={this.handleDeleteCity}>
         <button>
          delete
         </button>
       </form>
      </>
    ) : (
      <>
      <ul>
     {this.state.contacts.map((contact, index) => {
          return (
            <NavLink exact to={`/c/${city}/${contact}`}
              style={{
              textDecoration: "none"            
            }}>
              <li key={index}>@ {contact}</li>
            </NavLink>
          )
      })}  
      </ul>
      </>
    )
  }
}
export default CityContacts;



  