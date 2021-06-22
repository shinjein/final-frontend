import React, { useState, useEffect } from "react";
import { listedcities } from "../api";
import { Accordion, Card } from "react-bootstrap";
import CityContacts from "./CityContacts"

const ListedCities = ({userID}) => {
  
  const [cities, setCities] = useState([]);

  const listSearchedCities = async () => {
    const response = await listedcities();
    console.log(response.data);
    setCities(response.data)
  }

  const renderAccordion = (city,index) => {
    return (
      <Accordion key={index}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={city}>
            {city}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={city}>
            <Card.Body>
              <CityContacts
                cityName={city}
                userID={userID}
                cities={setCities}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  useEffect(() => {
    listSearchedCities();
  }, []);

  return <div className="listed-cities">{cities.map(renderAccordion)}</div>;
};

export default ListedCities;

// class ListedCities extends React.Component {
//   state = {
//     cities: [],
//     toggle: false,
//     userID: this.props.loggedInUser_id,
//   };

//   listSearchedCities = async (userID) => {
//     const response = await listedcities();
//     this.setState({
//       cities: response.data
//     })
//   }
//   componentDidMount() {
//     this.listSearchedCities();
//   }

//   renderAccordion = (cities, index) => {
//     return (
//       <Accordion key={index}>
//       <Card>
//        <Accordion.Toggle as={Card.Header} eventKey="0">
//           {city}
//         </Accordion.Toggle>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>contacts here</Card.Body>
//       </Accordion.Collapse>
//       </Card>
//     </Accordion>
//     )
//   }

//   render() {
//       <div className="list-header">
//         <h3>Searched Cities</h3>
//       </div>
//     return(
//       <>
//       <div className="list-body">
//         <hr/>
//         <ul className="ul-searched-cities">
//           {this.state.cities.map((city, index) => {
//             return (
//               <NavLink exact to={`/c/${city}`}
//                 cityName={city}
//                 activeClassName="active-city-link">
//                 <li key={index}> {city}</li>
//             </NavLink>
//           )
//       })} 
//       </ul>
      
//       </div>
//       </>
//     )
//   }
// }

// export default ListedCities;
