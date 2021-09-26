// Returns CoreNavbar with props consisting of all the titles for 
// our page

// Also returns h1 indiciating implmenetation of map coming soon

import React from "react";
import "./Home.css";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const Home = () => {
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
      <br/><br/>
      <br/><br/>
      <h1 style={{textAlign: "center"}}>Interactive Map coming soon</h1>
    </div>
  );
}
export default Home;
