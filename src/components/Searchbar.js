import React from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import { searchedCities, createcitylist } from "../api"
import { withRouter } from "react-router-dom"

class Search extends React.Component {
  state = {
    city: "",
    query: "",
    user: this.props.userID
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
          city: address[0].long_name,
          query: addressObject.formatted_address,
          loggedInUser: this.props.loggedInUser._id
        }
      );
    }
  }
  
  handleFormSubmit = async (event) => {
    event.preventDefault()
    const { city, user} = this.state;
    const { history, userID } = this.props
    await createcitylist(city, userID);
    await searchedCities(city, userID);
    history.push(`/c/${city}/details`);
    console.log(`${city} added to ${user}'s city search list`);
  }

  render() {

    return (
      <div className="search-bar">
        <Script 
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM9W3PuAbtNUZMy_D1J2BDxrZXXON_sCc&libraries=places"          
        onLoad={this.handleScriptLoad}        
        />
      <div className="search-bar">
        <SearchBar  id="autocomplete" 
        placeholder="search city" 
        hintText="Search City" 
        value={this.state.query}
        style={{
            margin: '0.5rem',
            width: '300px',
            maxHeight: '45px',
          }}
          user={this.state.userID}/>
        <form onSubmit={this.handleFormSubmit} >
          <button>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default withRouter(Search);