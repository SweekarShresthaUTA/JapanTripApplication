// Main Schedule page to merge the 2 other components and display the schedule planned with all activities

import React, { useState } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import ContentBox from "./ContentBox";
import Activity from "./Activity";
import "./Schedule.css";
import ScheduleBG from "../../Images/ScheduleBG.png";
import EditSchedule from "./EditSchedule";

const Schedule = () => {

  // Get today's date to be shown as heading, and is updated on the fly by rendering logic below
  /*var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy; */

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
      <h1 style={{ textAlign: "center" }}>Schedule</h1>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 13th</u> </h4>
      <p style={{textAlign: "left"}}><EditSchedule initialSchedule='Flight departs for Tokyo!'/></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 14th</u> </h4>
      <p style={{textAlign: "left"}}><EditSchedule initialSchedule="Arrive and go to K's House" href="https://www.google.com/maps/place/K's+House+Tokyo+Oasis/@35.7157867,139.7913281,17z/data=!3m1!4b1!4m8!3m7!1s0x60188ec1843d7b15:0x55b8f2aa015161b2!5m2!4m1!1i2!8m2!3d35.7158115!4d139.7935244"/></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 15th</u> </h4>
      <p style={{textAlign: "left"}}> Welcome dinner and visiting <a href="https://tinyurl.com/3hft9ee4"> Ueno </a>, <a href="https://tinyurl.com/ysym764f"> Sensoji Temple </a>, and <a href="https://tinyurl.com/53tc5vhn"> Akihabara </a> </p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 16th</u> </h4>
      <p style={{textAlign: "left"}}> Odaiba: <a href="https://goo.gl/maps/G1fnDkutmQ1tVJNy9"> Miraiken </a>, <a href="https://goo.gl/maps/cuSunBKzFSrWdNLQ8"> DiverCity Tokyo Plaza </a> (lunch), <a href="https://goo.gl/maps/CsvFCZB2bmdQrVfC8"> teamLab Borderless </a> </p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 17th</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/G1fnDkutmQ1tVJNy9"> Tokyo Station </a>, <a href="https://goo.gl/maps/cuSunBKzFSrWdNLQ8"> Imperial Palace </a>, <a href="https://goo.gl/maps/CsvFCZB2bmdQrVfC8"> Sengakuji Temple </a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 18th</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/LkbYckzT6DhobKL7A"> Meiji Shrine </a>, <a href="https://goo.gl/maps/WgTJeJ2F2YRPShLC9"> Harajuku </a>, <a href="https://goo.gl/maps/aGxesG7jfERAvgydA"> Hachiko Statue </a>, <a href="https://goo.gl/maps/Z1dSc2nkzLRpVkec6"> Shibuya Scramble </a> and <a href="https://goo.gl/maps/NdrBa1uqaihKCQJe9"> Shibuya Sky </a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 19th</u> </h4>
      <p style={{textAlign: "left"}}> Free Day!!</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 20th</u> </h4>
      <p style={{textAlign: "left"}}> Free Day!!</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 21st</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/C1tYLcn58RSy7Udn6"> Yokohama Landmark Tower </a>, <a href="https://goo.gl/maps/Hng9S8SG4Zu3Aw749"> Cup Noodle Museum </a>, <a href="https://goo.gl/maps/MmZXCzKpwhpB7J1o8"> Gundam Factory </a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 22nd</u> </h4>
      <p style={{textAlign: "left"}}> JR Central Tower (<a href="https://goo.gl/maps/EPN94NPf7NbPPm9R8">Shinjuku Station</a>) </p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 23rd</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/4QjDKjrGJVXLnQbH6"> Enoshima Station </a>, <a href="https://goo.gl/maps/L4VWF6McXznYu7U26">Kamakura</a>, <a href="https://goo.gl/maps/tqcuXcukeQWSW9Vs5">Great Buddha</a>, <a href="https://goo.gl/maps/akZ3mKyViuPPPQaz5">Zushi Beach</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 24th</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/PCJvu1iQN1S3dMRn7">Hakone</a>? </p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 25th</u> </h4>
      <p style={{textAlign: "left"}}> Free Day, prepare to travel to Kyoto</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 26th</u> </h4>
      <p style={{textAlign: "left"}}> Travel to Kyoto, <a href="https://goo.gl/maps/VVoKvpW9mpmc5uzq5">Kyoto Station</a>, <a href="https://g.page/kshousekyoto?share">K's House</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 27th</u> </h4>
      <p style={{textAlign: "left"}}> Kyoto: <a href="https://goo.gl/maps/KUV432mCPgaEBVHD9">Fushimi Inari Shrine</a>, <a href="https://goo.gl/maps/mkKkQN6SRFmuKdr89">Nara Park</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 28th</u> </h4>
      <p style={{textAlign: "left"}}> Kyoto: <a href="https://goo.gl/maps/7Q6ZH5JfPnRmA6Qt8">Kinkakuji Temple</a>, <a href="https://goo.gl/maps/eJHYBzp36XC9FnyD6">Ryoanji Temple</a>, <a href="https://g.page/arashiyama-bamboo-forest?share">Arashiyama Bamboo Forest</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 29th</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/2YX55Puqhkfh9Ums6">Osaka</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> June 30th</u> </h4>
      <p style={{textAlign: "left"}}> Hyogo: <a href="https://goo.gl/maps/xiJJZmJtvi3EP1oU6">Koshien Stadium</a>, <a href="https://goo.gl/maps/LP5qB4GTogGNt4Qh9">Akashi Bridge</a>, <a href="https://goo.gl/maps/Wt5g2esTkZqHva8v6">Himeji Castle</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 1st</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://goo.gl/maps/Ufb8pfjjgW4bRiR39"> Hiroshima Atomic Bomb Dome </a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 2nd</u> </h4>
      <p style={{textAlign: "left"}}> Free Day!!</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 3rd</u> </h4>
      <p style={{textAlign: "left"}}> Free Day!!</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 4th</u> </h4>
      <p style={{textAlign: "left"}}> <a href="https://www.orange-ferry.co.jp/en/kansai/">Overnight Ferry to Mastuyama</a>, settle into <a href="https://goo.gl/maps/SbzLtYifF2GR5P1E7">Comfort Hotel Matsuyama</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 5th</u> </h4>
      <p style={{textAlign: "left"}}> Ehime: <a href="https://goo.gl/maps/SWXfdXNB5eCMKRRK8">Matsuyama Castle</a> and <a href="https://goo.gl/maps/nPZrR9kYKHZ5nSr99">Shiki Museum</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 6th</u> </h4>
      <p style={{textAlign: "left"}}> Ehime: <a href="https://goo.gl/maps/AERS3CFk6JA4oL4i8">Uchiko</a> and <a href="https://goo.gl/maps/wB6HG9v5Jgxu2n7X7">Ozu</a>, <a href="https://goo.gl/maps/4hY1zxTuRjyk54PJ6">Shimonada Station</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 7th</u> </h4>
      <p style={{textAlign: "left"}}> Ehime: <a href="https://goo.gl/maps/D95AFqqyoqpLPeRn7">Yawatahama</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 8th</u> </h4>
      <p style={{textAlign: "left"}}> Ehime: <a href="https://goo.gl/maps/D95AFqqyoqpLPeRn7">Kirosan Park</a>, <a href="https://goo.gl/maps/5RimxCJgxF49yEG4A">Imabari</a></p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 9th</u> </h4>
      <p style={{textAlign: "left"}}> Free Day!!</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 10th</u> </h4>
      <p style={{textAlign: "left"}}> Free Day!!</p>
      <br />

      <h4 style={{ textAlign: "left" }}> <u> July 11th</u> </h4>
      <p style={{textAlign: "left"}}> Return to Tokyo</p>
      <br />

     {/* <ContentBox onAdd={addActivity} />
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
      })} */}
      <img src={ScheduleBG} style={{position: "absolute", zIndex: -1, height: '218px'}} className="jp-img" alt="Jpn-Background-Img" />
      {/* src for iteration documentation for the image above -> https://www.pngwing.com/en/search?q=japan */}
    </div>
  );
};

export default Schedule;
