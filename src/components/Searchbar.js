import React from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import { searchedCities } from "../api"
import { withRouter } from "react-router-dom"

class Search extends React.Component {
  state = {
    userID: this.props.loggedInUser,
    city: "",
    query: ""
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
        }
      );
    }
  }
  
  handleFormSubmit = async (event) => {
    event.preventDefault()
    const { city, userID } = this.state;
    const { history } = this.props
    await searchedCities(city, userID);
    history.push(`/listedcities/${userID}`);
    console.log(`${city} added to user's city search list`);
  }

  render() {

    return (
      <div>
        <Script 
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM9W3PuAbtNUZMy_D1J2BDxrZXXON_sCc&libraries=places"          
        onLoad={this.handleScriptLoad}        
        />        
        <SearchBar id="autocomplete" placeholder="" hintText="Search City" value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: '300px',
          }}
          user={this.state.userID}/>
        <form onSubmit={this.handleFormSubmit} >
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default withRouter(Search);