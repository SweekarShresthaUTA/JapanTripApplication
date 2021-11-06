// Main Schedule page to merge the 2 other components and display the schedule planned with all activities

import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import "./Schedule.css";

const Schedule = () => {

  return (
    <div>
      {/* Calling navbar to render the same navbar again for this page too */}
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
      <div
        style={{
          margin: "auto",
          marginLeft: '10px',
          marginRight: '10px',
        }}
      >
        <iframe
          title="Japan Calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=bWF2c2Ficm9hZGphcGFuOEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          style={{
            position: "relative",
            border: "solid",
            width: "100%",
            height: "800px",
            frameborder: "0",
            scrolling: "no",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Schedule;
