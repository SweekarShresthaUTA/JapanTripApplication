import React, { useState } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import ContentBox from "./ContentBox";
import Activity from "./Activity";
import "./Schedule.css";
import ScheduleBG from "../../Images/ScheduleBG.png";

const Schedule = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const [activities, setActivities] = useState([]);

  function addActivity(newActivity) {
    setActivities((prevActivity) => {
      return [...prevActivity, newActivity];
    });
  }

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
    </div>
  );
};

export default Schedule;
