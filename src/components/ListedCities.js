import React from "react";
import { listedcities } from "../api";
// import { NavLink } from "react-router-dom";

class ListedCities extends React.Component {
  state = {
    cities: [],
  };
  
  listUserCities = async () => {
    await listedcities()
  }
  render() {
    return(
      <p>listedcities.js</p>
    )
  }
}

export default ListedCities;
