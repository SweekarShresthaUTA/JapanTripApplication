// Provides search bar to look up different landmarks
// Will use places API and Microsoft Cognitive services API to implement logic in next iteration
// Currently returns NavBar and H1 heading indicating 'Landmark Lookup' for this iteration

import React, { useState } from "react";
//import Home from "../HomeComponents/Home";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import "./Resources.css";

const LandmarkLookup = () => {
  const [destination, setDestination] = useState("");

  const LookupLandmark = () => {
    console.log(destination);
    setDestination("");
  };

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
      <div style={{ textAlign: "center" }}>
        <h2>Search for Japanese cities / lankdmarks</h2>
        <br />
        <br />
        <input
          placeholder="Look up a destination..."
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        
        <button onClick={LookupLandmark}>Search</button>
      </div>
    </div>
  );
};

export default LandmarkLookup;
