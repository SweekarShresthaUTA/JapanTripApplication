// Provides search bar to look up different landmarks
// Will use places API and Microsoft Cognitive services API to implement logic in next iteration
// Currently returns NavBar and H1 heading indicating 'Landmark Lookup' for this iteration

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const LandmarkLookup = () => {
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
      <h1 style={{ textAlign: "center" }}>Landmark Lookup</h1>
    </div>
  );
};

export default LandmarkLookup;
