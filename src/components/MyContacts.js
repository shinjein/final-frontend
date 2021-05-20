// LIST ALL CONTACTS 
//PARENT: MAIN.JS

import React from "react";
import { mycontacts} from "../api";
import { NavLink } from "react-router-dom";

class MyContacts extends React.Component {
  state = {
    contacts: [],
    userID: this.props.loggedInUser._id //list usernames of contacts
  };
  
  listMyContacts = async () => {
    const response = await mycontacts();
    console.log(response.data[0].contacts);
    this.setState({
      contacts: response.data[0].contacts
    })
  }

  componentDidMount() {
    this.listMyContacts();
  }

  goBack = (e) => {
    const { history, loggedInUser } = this.props
    history.push(`/${loggedInUser.username}`)
  }
  render() {
    return(
      <>
      <h4>list my contacts</h4>
        <ul>
       {this.state.contacts.map((contact, index) => {
         return (
           <li key={index}>{contact.username}</li>
           )
          })} 
      </ul>
      <NavLink exact to="/addcontact">add contact</NavLink>
      <button onClick={this.goBack}>Back to Main</button>
      </>
    )
  }
}

export default MyContacts;
