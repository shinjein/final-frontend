// LIST ALL CONTACTS 
//PARENT: MAIN.JS

import React from "react";
import { mycontacts} from "../api";
import { NavLink } from "react-router-dom";
import imgAddContact from "../addcontact.png";
import imgBackBtn from "../goback.png";

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
    <div className="main-layout">
      <h2>Contacts</h2>
      <hr />
      <ul>
       {this.state.contacts.map((contact, index) => {
         return (
           <li key={index}>@ {contact.username}</li>
           )
          })} 
      </ul>
    <div className="footer-btn-bar">
    <section>
      <NavLink exact to="/addcontact">
        <img src={imgAddContact} alt="add"
        style={{
          maxWidth: "35px"
        }} />
        </NavLink>
      </section>
    <section>
      <button className="back-btn" onClick={this.goBack}> 
        <img src={imgBackBtn} alt="back-btn" style={{
        maxWidth: "35px"
      }} />
       </button>
    </section>
    </div>
    </div>
  </>
    )
  }
}

export default MyContacts;
