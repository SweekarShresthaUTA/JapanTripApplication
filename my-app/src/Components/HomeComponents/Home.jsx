// Returns CoreNavbar with props consisting of all the titles for 
// our page

// Also returns h1 indiciating implmenetation of map coming soon

import React from "react";
import "./Home.css";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import MapsBG from "../../Images/MapsBG.png"

const Home = () => {
  return (
    <div>
      {/* Rendering the navbar for the page */}
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
      <br/><br/>
      <h1 style={{textAlign: "center"}}>Interactive Map coming soon</h1>
      <br/>
      <img src={MapsBG} className="maps-bg" alt="Static-Tokyo-Map-Img" />
      {/* src for iteration documentation for the image above -> https://www.google.com/maps */}

    </div>
  );
}
export default Home;
