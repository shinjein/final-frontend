import React from "react";
import imgLogin from "../login.png";
import { NavLink } from "react-router-dom";
import { signup } from "../api";
import Script from 'react-load-script';
import { withRouter } from "react-router-dom"

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email:"",
    base: "",
    query: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleScriptLoad = () => { 
  const options = { types: ['(cities)'] }; 


  /*global google*/
  this.autocomplete = new google.maps.places.Autocomplete(
                        document.getElementById('autocomplete'),
                        options );

  this.autocomplete.setFields(['address_components', 'formatted_address']);
  this.autocomplete.addListener('place_changed', this.handlePlaceSelect); 
  }

  handlePlaceSelect = () => {
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    if (address) {
      this.setState(
        {
          base: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }


  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, password, email, base } = this.state;
    await signup( username, password, email, base);
    this.props.history.push("/login");
  };

  render() {
    const { username, password, email, base } = this.state;
    return (
      <div className="form-div">
        <Script 
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM9W3PuAbtNUZMy_D1J2BDxrZXXON_sCc&libraries=places"          
        onLoad={this.handleScriptLoad}        
        />
        <form onSubmit={this.handleFormSubmit} className="forms">
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="e-mail"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            id="autocomplete" 
            placeholder="base city"
            type="text"
            name="base"
            value={base}
            onChange={this.handleChange}
          />
          <button className="signup-btn">
            <img src={imgLogin} 
            alt="signup-btn"
            style={{
              maxWidth: "30px"
            }}/>
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
