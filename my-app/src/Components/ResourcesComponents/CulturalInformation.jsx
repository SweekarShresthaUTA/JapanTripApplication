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
        firstMenuTitle="Schedule"
        secondMenuTitle="Currency Exchange"
        thirdMenuTitle="Map"
        dropDownMenuTitle="Resources"
        firstDropDownMenuOption="Common Phrases"
        secondDropDownMenuOption="Landmark Lookup"
        thirdDropDownMenuOption="Cultural Information"
        fourthDropDownMenuOption="Weather"
      />
      <div className="pictures-bg">
        <img src="9-13-page-000.jpg" width="550" height="700" alt="Tokyo"></img>
        <br />
        <br />

        <img src="9-13-page-001.jpg" width="550" height="700" alt="Tokyo"></img>
        <br />
        <br />

        <img src="9-13-page-002.jpg" width="550" height="700" alt="Tokyo"></img>
        <br />
        <br />

        <img src="9-13-page-003.jpg" width="550" height="700" alt="Tokyo"></img>
        <br />
        <br />

        <img src="9-13-page-004.jpg" width="550" height="700" alt="Tokyo"></img>
        <br />
        <br />

        <img src="9-13-page-005.jpg" width="550" height="700" alt="Tokyo"></img>
      </div>
    </div>
  );
};

export default CulturalInformation;
