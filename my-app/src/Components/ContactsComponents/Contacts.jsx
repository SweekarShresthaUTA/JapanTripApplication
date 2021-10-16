// Consists of Navbar and Contacts information
// Static page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import ContactsBG from "../../Images/ContactsBG.png"

const Contacts = () => { console.log("hello world");
  return (
    <div>
      {/* Navbar that will be called with the followign props that holds the titles to be rendered for the navbar */}
      <CoreNavBar
        title="MavsAbroadJapan"
        firstMenuTitle="Contacts"
        secondMenuTitle="Schedule"
        thirdMenuTitle="Currency Exchange"
        dropDownMenuTitle="Resources"
        firstDropDownMenuOption="Common Phrases"
        secondDropDownMenuOption="Landmark Lookup"
        thirdDropDownMenuOption="Cultural Information"
        fourthDropDownMenuOption="Weather"

      />
      <br />
      <br />
      {/* Professor Aiken's Contact Information */}
      <h1 style={{ textAlign: "center" }}>Contacts</h1>
      <h5 style={{ textAlign: "center", paddingTop: 50 }}>Professor Aiken</h5>
      <p style={{textAlign: "center"}}>
        <a href="mailto:laiken@uta.edu" >laiken@uta.edu</a>
      </p>
      <p style={{textAlign: "center"}}>
        <a href="https://mentis.uta.edu/explore/profile/ladonna-aiken" >Professor Aiken's UTA Page</a>
      </p>

      {/* Professor Horton's Contact Information */}
      <h5 style={{ textAlign: "center", paddingTop: 50 }}>Professor Horton</h5>
      <p style={{textAlign: "center"}}>
        <a href="mailto:brianhorton@uta.edu" >brianhorton@uta.edu</a>
      </p>
      <p style={{textAlign: "center"}}>
        <a href="https://mentis.uta.edu/explore/profile/brian-horton" >Professor Horton's UTA Page</a>
      </p>

      {/* Useful UTA links */}
      <h5 style={{ textAlign: "center", paddingTop: 50 }}>UTA Links</h5>
      <p style={{textAlign: "center"}}>
        <a href="https://studyabroad.uta.edu">UTA Study Abroad Program</a>
      </p>
      <p style={{textAlign: "center"}}>
        <a href=" https://www.uta.edu/academics/schools-colleges/liberal-arts/departments/communication">UTA Communications Department</a>
      </p>
      <img src={ContactsBG} style={{height: "218px"}} className="jp-img" alt="Jpn-Background-Img" />
      {/* src for iteration documentation for the image above -> https://www.pngwing.com/en/search?q=japan */}

    </div>
  );
};

export default Contacts;
