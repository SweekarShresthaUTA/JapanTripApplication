import React, { useState } from "react";
import "./Schedule.css";

function ContentBox(props) {
  const [activity, setActivity] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setActivity(prevActivity => {
      return {
        ...prevActivity,
        [name]: value
      };
    });
  }

  function submitActivity(event) {
    props.onAdd(activity);
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
          placeholder="Add an activity..."
          rows="3"
        />
        <button onClick={submitActivity}>Add</button>
      </form>
    </div>
  );
}

export default ContentBox;
