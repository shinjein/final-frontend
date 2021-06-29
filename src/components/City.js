import React from "react";
import { citycontacts } from "../api"
import Search from "./Searchbar";
import CityContacts from "./CityContacts";

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
      )))
    this.setState({
      contacts: contacts
    })
  }

  render() {
    const { loggedInUser } = this.props;
    const { city } = this.state
    return(
      <>
      <Search />
        <h2>{this.state.city} >></h2>
        <hr />
          <CityContacts />
        <hr />
      <button onClick={this.goBack}>go back</button>
      </>
    )
  }
}

export default City;