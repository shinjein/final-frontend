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
