import React from "react";
import { NavLink } from "react-router-dom";

class About extends React.Component {

  render() {
    return (
      <div className="about-layout">
        <section className="about-text">
        <p>e-contacts is a minimal user-based application similar to the Contacts app every mobile device has, but with a twist.</p>
        <p>Often times we go abroad without knowing anyone in our new destination. 
          e-contacts uses your own real network to put you in contact with friends of friends based in your searched city. 
        </p>
        <p>TO USE: Create an account and add contacts by username. Before going abroad, search your destination by city name, and a list of your contacts with connections in the searched city will appear. 
          Click on their name to view their network in your searched city. </p>
        <p>DEMO ACCOUNT: log in using the username "demo" and password "Dem0123" to see how it works. </p>
        <p className="disclaimer">
        e-contacts is a passion project by @shinjein presented as her final project for IronHack Lisbon in May 2021. It is currently still in development! 
        </p>
        </section>
      </div>
    );
  }
}

export default About;