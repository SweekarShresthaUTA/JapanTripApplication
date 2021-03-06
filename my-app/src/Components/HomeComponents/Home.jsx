// Returns CoreNavbar with props consisting of all the titles for
// our page

// Also returns h1 indiciating implmenetation of map coming soon
import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import ImbeddedMap from "./ImbeddedMap";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <div>
      {/* Rendering the navbar for the page */}
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
      <br />
      <br />
      <br />
      <div className={styles.map}>
        <ImbeddedMap />
      </div>
    </div>
  );
};
export default Home;
