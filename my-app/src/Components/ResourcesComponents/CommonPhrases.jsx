// Returns the Navbar and common phrases 
// Static Page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const CommonPhrases = () => {
  return (
    <div>
      {/* Rendering the Navbar */}
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
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Common Japansese Phrases will be added soon</h1>
    </div>
  );
};

export default CommonPhrases;
