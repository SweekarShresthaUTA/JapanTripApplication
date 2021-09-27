// Provides search bar to look up different landmarks
// Will use places API and Microsoft Cognitive services API to implement logic in next iteration
// Currently returns NavBar and H1 heading indicating 'Landmark Lookup' for this iteration

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const LandmarkLookup = () => {
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
      <img src="9-13-page-000.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-001.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-002.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-003.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>

            <img src="9-13-page-004.jpg" width="550" height="700" alt="Tokyo"></img>
            <br/>
            
            <img src="9-13-page-005.jpg" width="550" height="700" alt="Tokyo"></img>
    </div>
  );
};

export default LandmarkLookup;
