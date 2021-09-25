import React from "react";
import "./App.css";
import CoreNavBar from "./Components/NavbarComponents/CoreNavbar";

function App() {
  console.log("Hello World")
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
    </div>
  );
}
export default App;
