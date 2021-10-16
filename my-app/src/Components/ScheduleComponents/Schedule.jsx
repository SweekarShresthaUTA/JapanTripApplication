// Main Schedule page to merge the 2 other components and display the schedule planned with all activities

import React, { useState } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import ContentBox from "./ContentBox";
import Activity from "./Activity";
import "./Schedule.css";
import ScheduleBG from "../../Images/ScheduleBG.png";

const Schedule = () => {

  // Get today's date to be shown as heading, and is updated on the fly by rendering logic below
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  // setActivities changes the state of the empty array as more activites are added on
  const [activities, setActivities] = useState([]);

  // function called to add more activity, uses JS spread operator to tag along previous activites planned for the day as well
  function addActivity(newActivity) {
    setActivities((prevActivity) => {
      return [...prevActivity, newActivity];
    });
  }

  // function called to delete any activities if user clicks on delete inside the activity box
  function deleteActivity(id) {
    setActivities((prevActivity) => {
      return prevActivity.filter((activityItem, index) => {
        return index !== id;
      });
    });
  }

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
      <h2 style={{ textAlign: "center" }}>Schedule, {today}</h2>
      <br />
      <ContentBox onAdd={addActivity} />
      {activities.map((activityItem, index) => {
        return (
          <Activity
            key={index}
            id={index}
            title={activityItem.title}
            content={activityItem.content}
            onDelete={deleteActivity}
          />
        );
      })}
      <img src={ScheduleBG} style={{position: "absolute", zIndex: -1, height: '218px'}} className="jp-img" alt="Jpn-Background-Img" />
      {/* src for iteration documentation for the image above -> https://www.pngwing.com/en/search?q=japan */}
    </div>
  );
};

export default Schedule;
