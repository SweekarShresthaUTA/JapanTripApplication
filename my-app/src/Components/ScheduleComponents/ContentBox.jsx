// Container to type out activity planned for the day, Prof. Aiken will have admin access for this feature

import React, { useState } from "react";
import "./Schedule.css";

function ContentBox(props) {

  // props indicated added activity
  const { onAdd } = props;

  // setActivity chagnes the state of the activity based on what the admin types as planned schedule for the day
  const [activity, setActivity] = useState({
    content: ""
  });

  // is called whenever admin types the details of activity into the activity container 
  function handleChange(event) {
    const { name, value } = event.target;

    // set activities and still shows previous activites with javascript spread operator ( ... )
    setActivity(prevActivity => {
      return {
        ...prevActivity,
        [name]: value
      };
    });
  }

  // form called this function to add onto the list of activities to be displayed
  function submitActivity(event) {
    onAdd(activity);
    setActivity({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={activity.content}
          placeholder="Provide any question you have have..."
          rows="3"
        />
        <button onClick={submitActivity}>Add</button>
      </form>
    </div>
  );
}

export default ContentBox;
