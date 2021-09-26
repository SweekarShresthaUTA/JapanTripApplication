// Consists of Navbar and Contacts information
// Static page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const Contacts = () => {
  return (
    <div>
      <CoreNavBar
        title="MavsAbroadJapan"
        firstMenuTitle="Contacts"
        secondMenuTitle="Schedule"
        thirdMenuTitle="Currency Exchange"
        dropDownMenuTitle="Resources"
        firstDropDownMenuOption="Common Phrases"
        secondDropDownMenuOption="Landmark Lookup"
        thirdDropDownMenuOption="Cultural Information"
      />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Contacts</h1>
      <h5 style={{ textAlign: "center", paddingTop: 50 }}>Professor Aiken</h5>
      <p style={{textAlign: "center"}}>
        <a href="mailto:laiken@uta.edu" >laiken@uta.edu</a>
      </p>
      <p style={{textAlign: "center"}}>
        <a href="https://mentis.uta.edu/explore/profile/ladonna-aiken" >Professor Aiken's UTA Page</a>
      </p>
      <h5 style={{ textAlign: "center", paddingTop: 50 }}>Professor Horton</h5>
      <p style={{textAlign: "center"}}>
        <a href="mailto:brianhorton@uta.edu" >brianhorton@uta.edu</a>
      </p>
      <p style={{textAlign: "center"}}>
        <a href="https://mentis.uta.edu/explore/profile/brian-horton" >Professor Horton's UTA Page</a>
      </p>
      <h5 style={{ textAlign: "center", paddingTop: 50 }}>UTA Links</h5>
      <p style={{textAlign: "center"}}>
        <a href="https://studyabroad.uta.edu">UTA Study Abroad Program</a>
      </p>
      <p style={{textAlign: "center"}}>
        <a href=" https://www.uta.edu/academics/schools-colleges/liberal-arts/departments/communication">UTA Communications Department</a>
      </p>
    </div>
  );
};

export default Contacts;
