import React from "react";
import { NavLink } from "react-router-dom";

class About extends React.Component {

  render() {
    return (
      <div className="about-layout">
        <section className="about-text">
        <p>e-contacts is a minimal user-based application inspired by the classic contact book every mobile device has, but with a twist.</p>
        <p>often times we go abroad and know nobody in our new destination. Using your own real network, the app will show you mutual contacts per searched city by only
          one degree of separation (so friends of friends).</p>
        <p>To use: simply create an account and search your friends by username. Then search your new destination by city name, and a list of your contacts with connections in the searched city will appear. </p>
        <p>DEMO ACCOUNT: log in using the username "demo" and password "Dem0123" to see how it works. </p>
        <p className="disclaimer">
        e-contacts is a passion project of Jeein Shin presented as her final project for IronHack Lisbon in May 2021. It is currently still in development! 
        </p>
        </section>
      </div>
    );
  }
}

export default About;