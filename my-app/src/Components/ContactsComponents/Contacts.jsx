// Consists of Navbar and Contacts information
// Static page

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const Contacts = () => {
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
      <h1 style={{ textAlign: "center" }}>Contacts</h1>
    </div>
  );
};

export default Contacts;
