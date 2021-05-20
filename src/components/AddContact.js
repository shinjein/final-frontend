import React from "react";
import { addContact } from "../api";

class AddContact extends React.Component {
  state = {
    userID: this.props.loggedInUser._id,
    user: this.props.loggedInUser,
    contact: ""

  };
  // handleFileChange = (event) => {
  //   this.setState({
  //     imageUrl: event.target.files[0],
  //   });
  // };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { contact } = this.state;
    const { history } = this.props;
    await addContact(contact);
    history.push("/mycontacts");
  };

  goBack = (e) => {
    const { history, loggedInUser } = this.props
    history.push(`/${loggedInUser.username}`)
  }

  render() {
    const { contact } = this.state;
    return (
      <>
      <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
        <input
          placeholder="Contact's Username"
          type="text"
          name="contact"
          onChange={this.handleChange}
          value={contact}
        />
        <button type="submit">Create</button>

      </form>
      <button onClick={this.goBack}>Back to Main</button>
      </>
    );
  }
}

export default AddContact;
