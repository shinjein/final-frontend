import React from "react";
import { listedcities } from "../api";
import { NavLink } from "react-router-dom";

class ListedCities extends React.Component {
  state = {
    cities: [],
    userID: this.props.loggedInUser_id
  };
  
  listUserCities = async (userID) => {
    const response = await listedcities();
    console.log(response.data);
    this.setState({
      cities: response.data
    })
  }

  componentDidMount() {
    this.listUserCities();
  }

  render() {
    return(
      <>
      <div className="list-header">
        <h3>Searched Cities</h3>
      </div>
      <div className="list-body">
        <hr/>
        <ul>
       {this.state.cities.map((city, index) => {
          return (
            <NavLink exact to={`/c/${city}`}
            style={{
              fontSize:"25px",
              textDecoration: "none"
            }}
            activeStyle={{
            }}>
              <li key={index}> {city} </li>
            </NavLink>
          )
      })} 
      </ul>
      </div>
      </>
    )
  }
}

export default ListedCities;
