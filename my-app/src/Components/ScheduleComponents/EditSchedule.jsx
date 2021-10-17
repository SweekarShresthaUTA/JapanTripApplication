// edit schedule functionality
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const EditSchedule = (props) => {

  // props that sets the schedule to render as the inital prop passed in, initial being the initially planned schedule for the day 
  const [schedule, setSchedule] = useState("");
  const [renderSchedule, setRenderSchedule] = useState(props.initialSchedule);

  // changes state of the renderSchedule to render the edited new schedule text
  const ChangeEvent = () => {
    setRenderSchedule(schedule);
    setSchedule("");
  };

  // if href is provided render the text that redirects it with href   
  if (props.href) {
    return (
      <>
        <p><a href={props.href} >{renderSchedule}</a></p> 
        <input
          width=""
          placeholder="Change event..."
          value={schedule}
          onChange={(e) => {
            setSchedule(e.target.value);
          }}
        />
        <Button onClick={ChangeEvent} size="sm">
          Change
        </Button>
      </>
    );
  } else {
    return (
      <>
        <p>{renderSchedule}</p>
        <input
          width=""
          placeholder="Change event..."
          value={schedule}
          onChange={(e) => {
            setSchedule(e.target.value);
          }}
        />
        <Button onClick={ChangeEvent} size="sm">
          Change
        </Button>
      </>
    );
  }
};

export default EditSchedule;
