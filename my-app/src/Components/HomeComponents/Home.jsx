// Returns CoreNavbar with props consisting of all the titles for 
// our page

// Also returns h1 indiciating implmenetation of map coming soon
import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import ImbeddedMap from "./ImbeddedMap"
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      {/* Rendering the navbar for the page */}
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
      <br/>
      <div className={styles.map}>
        <ImbeddedMap/>
      </div>
      {/* src for iteration documentation for the image above -> https://www.google.com/maps */}

    </div>
  );
}
export default Home;
