import React from "react";
import { NavLink } from "react-router-dom";

function About() {

    return (
      <div className="about-layout">
        <section className="about-text">
        <p>Often times we go abroad without knowing anyone in our new destination. 
          e-contacts is a minimal user-based app with an interface inspired by the classic contact book every mobile has. It uses your real network to put you in contact with friends of friends based in your searched city. 
        </p>
        <p>TO USE: Search by city name / destination or add friends via username. You will be able to view your direct contacts network to 1-degree of separation if 
          your searched city matches their base city.</p>
        <p>DEMO ACCOUNT: log in using the username "demo" and password "Dem0123" to see how it works. </p>
        <p className="disclaimer">
        ReactJS, Node.JS, sanzo-wada.dmbk.io, Bootstrap.
        e-contacts is a project by @shinjein presented as her final project for IronHack Lisbon in May 2021. Under continuous development.
        </p>
        </section>
      </div>
    )

}

export default About;