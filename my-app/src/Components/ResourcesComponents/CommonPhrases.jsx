// Returns the Navbar and common phrases 
// Static Page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const CommonPhrases = () => {
  return (
    <div>
      <CoreNavBar
        title="MavsAbroad"
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
      <h1 style={{ textAlign: "center" }}>Common Phrases</h1>
    </div>
  );
};

export default CommonPhrases;
