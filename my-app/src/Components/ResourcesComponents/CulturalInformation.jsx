// Returns NavBar and returns relevant cultural information 
// Static page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const CulturalInformation = () => {
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
      />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Cultural Information about Japan will be added soon</h1>
    </div>
  );
};

export default CulturalInformation;
